// src/modules/notifications/notifications.service.ts
import { prisma } from '../../config/database';
import { NotificationType, NotificationStatus } from '@prisma/client';
import nodemailer from 'nodemailer'; // install dulu: npm i nodemailer @types/nodemailer -D kalau belum
import { env } from '../../config/env';

export class NotificationService {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: env.SMTP_HOST || 'smtp.gmail.com',
            port: env.SMTP_PORT ? parseInt(env.SMTP_PORT) : 587,
            secure: false, // true untuk 465, false untuk 587
            auth: {
                user: env.SMTP_USER,
                pass: env.SMTP_PASS, // app password kalau pake Gmail
            },
        });
    }

    async sendEmailNotification(recipientEmail: string, subject: string, body: string, projectId?: string) {
        try {
            const info = await this.transporter.sendMail({
                from: `"Illusphere Creative" <${env.SMTP_USER}>`,
                to: recipientEmail,
                subject,
                text: body,
                html: `<p>${body}</p><p>Project ID: ${projectId || 'N/A'}</p>`, // simple HTML
            });

            // Log ke DB
            await prisma.notification.create({
                data: {
                    type: NotificationType.EMAIL,
                    recipientEmail,
                    subject,
                    body,
                    status: NotificationStatus.SENT,
                    projectId,
                    sentAt: new Date(),
                },
            });

            console.log('Email sent:', info.messageId);
            return info;
        } catch (error) {
            console.error('Email error:', error);

            // Log failed
            await prisma.notification.create({
                data: {
                    type: NotificationType.EMAIL,
                    recipientEmail,
                    subject,
                    body,
                    status: NotificationStatus.FAILED,
                    projectId,
                    errorMessage: (error as Error).message,
                    failedAt: new Date(),
                },
            });

            throw error; // lempar biar controller handle
        }
    }

    // Method khusus untuk status change (dipanggil dari update status)
    async notifyStatusChange(projectId: string, newStatus: string, clientEmail: string, note?: string) {
        const subject = `Update Status Project: ${newStatus}`;
        let body = `Halo,\n\nStatus project Anda telah diupdate menjadi **${newStatus}**.\n`;
        if (note) body += `Catatan dari tim: ${note}\n`;
        body += `\nTerima kasih telah mempercayakan project ke Illusphere Creative!\n\nBest regards,\nTim Illusphere`;

        await this.sendEmailNotification(clientEmail, subject, body, projectId);
    }
}