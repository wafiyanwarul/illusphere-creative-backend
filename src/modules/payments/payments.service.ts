// src/modules/payments/payments.service.ts
import { prisma } from '../../config/database';
import { PaymentType, PaymentStatus, ActivityType } from '../../../generated/prisma';
import { BadRequestError, NotFoundError } from '../../shared/utils/errors';
import { NotificationService } from '../notifications/notifications.service';

export class PaymentService {
    async generateInvoices(projectId: string) {
        const project = await prisma.project.findUnique({
            where: { id: projectId },
            include: { client: true },
        });

        if (!project) throw new NotFoundError('Project tidak ditemukan');

        // Pake finalPrice kalau ada, fallback ke estimatedMax atau min
        const baseAmount = project.finalPrice || project.estimatedMax || project.estimatedMin || 0;
        if (baseAmount <= 0) throw new BadRequestError('Harga final atau estimasi belum ada');

        const dpAmount = Math.round(baseAmount * 0.5);      // 50% DP
        const milestoneAmount = Math.round(baseAmount * 0.3); // 30% MVP
        const finalAmount = Math.round(baseAmount * 0.2);    // 20% Final

        const invoiceDrafts = [
            {
                type: PaymentType.DP,
                amount: dpAmount,
                tripayInvoiceId: `INV-DUMMY-DP-${project.referenceId}`,
            },
            {
                type: PaymentType.MILESTONE,
                amount: milestoneAmount,
                tripayInvoiceId: `INV-DUMMY-MILESTONE-${project.referenceId}`,
            },
            {
                type: PaymentType.FINAL,
                amount: finalAmount,
                tripayInvoiceId: `INV-DUMMY-FINAL-${project.referenceId}`,
            },
        ] as const;

        const existingInvoices = await prisma.payment.findMany({
            where: {
                projectId,
                type: { in: [PaymentType.DP, PaymentType.MILESTONE, PaymentType.FINAL] },
            },
        });

        const existingTypeSet = new Set(existingInvoices.map((invoice) => invoice.type));
        const draftsToCreate = invoiceDrafts.filter((draft) => !existingTypeSet.has(draft.type));

        if (draftsToCreate.length > 0) {
            await prisma.payment.createMany({
                data: draftsToCreate.map((draft) => ({
                    projectId,
                    type: draft.type,
                    amount: draft.amount,
                    status: PaymentStatus.PENDING,
                    tripayInvoiceId: draft.tripayInvoiceId,
                })),
            });
        }

        const invoices = await prisma.payment.findMany({
            where: {
                projectId,
                type: { in: [PaymentType.DP, PaymentType.MILESTONE, PaymentType.FINAL] },
            },
            orderBy: { createdAt: 'asc' },
        });

        // Log activity
        await prisma.projectActivity.create({
            data: {
                projectId,
                type: ActivityType.NOTE_ADDED,
                action: 'Invoices generated (DP, Milestone, Final)',
                description: `Base amount: ${baseAmount} (finalPrice used if available), DP: ${dpAmount}, Milestone: ${milestoneAmount}, Final: ${finalAmount}`,
            },
        });

        return {
            projectId,
            referenceId: project.referenceId,
            baseAmount, // Tambah ini biar response tau pake final atau estimated
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
}
