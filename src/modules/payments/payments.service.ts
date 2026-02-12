// src/modules/payments/payments.service.ts
import { prisma } from '../../config/database';
import { PaymentType, PaymentStatus, ActivityType } from '../../../generated/prisma';
import { BadRequestError, NotFoundError } from '../../shared/utils/errors';
import { NotificationService } from '../notifications/notifications.service';
import axios from 'axios';
import { createHmac } from 'crypto';
import { env } from '../../config/env';

export class PaymentService {
    async generateInvoices(projectId: string) {
        const project = await prisma.project.findUnique({
            where: { id: projectId },
            include: { client: true },
        });

        if (!project) throw new NotFoundError('Project tidak ditemukan');

        const baseAmount = project.finalPrice || project.estimatedMax || project.estimatedMin || 0;
        if (baseAmount <= 0) throw new BadRequestError('Harga final atau estimasi belum ada');

        const dpAmount = Math.round(baseAmount * 0.5);
        const milestoneAmount = Math.round(baseAmount * 0.3);
        const finalAmount = Math.round(baseAmount * 0.2);

        const merchantCode = env.TRIPAY_MERCHANT_CODE.trim();
        const privateKey = env.TRIPAY_PRIVATE_KEY.trim();
        const apiKey = env.TRIPAY_API_KEY.trim();

        // Generate Tripay invoices for each term
        const invoices = [];
        for (const { type, amount } of [
            { type: PaymentType.DP, amount: dpAmount },
            { type: PaymentType.MILESTONE, amount: milestoneAmount },
            { type: PaymentType.FINAL, amount: finalAmount },
        ]) {
            const merchantRef = `INV-${type}-${project.referenceId}-${Date.now()}`;

            const signaturePayload = `${merchantCode}${merchantRef}${amount}`;
            const signature = createHmac('sha256', privateKey)
                .update(signaturePayload)
                .digest('hex');

            // Payload with signature in body (Tripay create transaction)
            const payload = {
                method: 'QRIS',
                merchant_ref: merchantRef,
                amount,
                customer_name: project.client.fullName || 'Client',
                customer_email: project.client.email || 'noemail@contoh.com',
                customer_phone: project.client.phone || '0000000000',
                order_items: [
                    {
                        sku: project.referenceId,
                        name: `Payment ${type} for Project ${project.projectName}`,
                        price: amount,
                        quantity: 1,
                    },
                ],
                callback_url: env.TRIPAY_CALLBACK_URL,
                return_url: `https://illusphere-creative.vercel.app/track?ref=${project.referenceId}`,
                expired_time: Math.floor(Date.now() / 1000) + 86400,
                signature,
            };

            const tripayResponse = await axios.post(
                env.TRIPAY_SANDBOX === 'true' ? 'https://tripay.co.id/api-sandbox/transaction/create' : 'https://tripay.co.id/api/transaction/create',
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                        'X-Signature': signature,
                        'X-Merchant-Code': merchantCode,
                    },
                }
            ).catch(err => {
                console.error('Tripay full error:', err.response?.data || err.message);
                throw err;
            });

            const tripayData = tripayResponse.data.data;

            const createdInvoice = await prisma.payment.create({
                data: {
                    projectId,
                    type,
                    amount,
                    status: PaymentStatus.PENDING,
                    tripayInvoiceId: tripayData.reference,
                    tripayInvoiceUrl: tripayData.checkout_url || tripayData.payment_url,
                    expiredAt: new Date(tripayData.expired_time * 1000),
                },
            });

            invoices.push(createdInvoice);
        }

        // Log activity
        await prisma.projectActivity.create({
            data: {
                projectId,
                type: ActivityType.NOTE_ADDED,
                action: 'Invoices generated with Tripay (DP, Milestone, Final)',
                description: `Base: ${baseAmount}, DP: ${dpAmount}, Milestone: ${milestoneAmount}, Final: ${finalAmount}`,
            },
        });

        return {
            projectId,
            referenceId: project.referenceId,
            baseAmount,
            invoicesCount: invoices.length,
            invoices,
        };
    }

    async mockPayInvoice(paymentId: string) {
        const payment = await prisma.payment.findUnique({
            where: { id: paymentId },
            include: { project: { include: { client: true } } }, // Tambah include client buat email
        });

        if (!payment) throw new NotFoundError('Invoice tidak ditemukan');
        if (payment.status !== PaymentStatus.PENDING) throw new BadRequestError('Invoice sudah diproses');

        const updated = await prisma.payment.update({
            where: { id: paymentId },
            data: {
                status: PaymentStatus.PAID,
                paidAt: new Date(),
            },
        });

        await prisma.projectActivity.create({
            data: {
                projectId: payment.projectId,
                type: ActivityType.PAYMENT_RECEIVED,
                action: `Payment ${payment.type} received`,
                description: `Amount: ${payment.amount}`,
            },
        });

        // Trigger email notif payment received ke client
        if (payment.project.client?.email && payment.project.projectName) {
            const notificationService = new NotificationService();
            await notificationService.notifyPaymentReceived(
                payment.projectId,
                payment.type,
                payment.amount,
                payment.project.client.email,
                payment.project.client.fullName || 'Client',
                payment.project.projectName
            );
        }

        return updated;
    }

    async updatePaymentFromCallback(tripayRef: string, newStatus: string) {
        const payment = await prisma.payment.findFirst({ where: { tripayInvoiceId: tripayRef }, include: { project: { include: { client: true } } } });

        if (!payment) throw new NotFoundError('Payment tidak ditemukan');

        const updated = await prisma.payment.update({
            where: { id: payment.id },
            data: {
                status: newStatus as PaymentStatus,
                paidAt: new Date(),
            },
        });

        // Log & notif seperti mockPayInvoice
        await prisma.projectActivity.create({
            data: {
                projectId: payment.projectId,
                type: ActivityType.PAYMENT_RECEIVED,
                action: `Payment ${payment.type} received via Tripay`,
                description: `Amount: ${payment.amount}`,
            },
        });

        if (payment.project.client?.email && payment.project.projectName) {
            const notificationService = new NotificationService();
            await notificationService.notifyPaymentReceived(
                payment.projectId,
                payment.type,
                payment.amount,
                payment.project.client.email,
                payment.project.client.fullName || 'Client',
                payment.project.projectName
            );
        }

        return updated;
    }
}
