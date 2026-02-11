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
            secure: false,
            auth: {
                user: env.SMTP_USER,
                pass: env.SMTP_PASS,
            },
        });
    }

    async sendEmailNotification(
        recipientEmail: string,
        recipientName: string,
        subject: string,
        body: string,
        projectId?: string
    ) {
        try {
            const info = await this.transporter.sendMail({
                from: `"Illusphere Creative" <${env.SMTP_USER}>`,
                to: recipientEmail,
                subject,
                text: body,
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #2c3e50;">Hello ${recipientName},</h2>
            <p>${body}</p>
            <p style="margin-top: 20px; font-size: 14px; color: #555;">
              Terima kasih telah mempercayakan project Anda kepada kami.<br>
              Kami siap membantu kapan saja jika ada pertanyaan!
            </p>
            <p style="font-size: 12px; color: #888; margin-top: 30px;">
              Best regards,<br>
              Tim Illusphere Creative<br>
              <a href="https://illusphere-creative.vercel.app" style="color: #3498db;">illusphere-creative.vercel.app</a>
            </p>
          </div>
        `,
            });

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

            console.log('Email sent to', recipientEmail, 'ID:', info.messageId);
            return info;
        } catch (error) {
            console.error('Email failed:', error);

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

            throw error;
        }
    }

    async notifyStatusChange(projectId: string, newStatus: string, clientEmail: string, clientName: string, projectName: string, note?: string) {
        const subject = `Update Status Project: ${projectName} → ${newStatus}`;

        let body = `Kami harap email ini menemukan Anda dalam keadaan baik.<br><br>`;
        body += `Project Anda <strong>${projectName}</strong> (Reference ID: <strong>${projectId}</strong>) telah diupdate statusnya menjadi <strong>${newStatus}</strong>.<br><br>`;

        if (note) {
            body += `<strong>Catatan dari tim:</strong><br>${note}<br><br>`;
        }

        body += `Anda bisa pantau progress project kapan saja melalui link ini:<br>`;
        body += `<a href="https://illusphere-creative.vercel.app/track?ref=${projectId}" style="color: #3498db; text-decoration: none; font-weight: bold;">Lihat Detail Project</a><br><br>`;

        body += `Terima kasih atas kepercayaannya, kami akan terus update perkembangan selanjutnya!`;

        await this.sendEmailNotification(clientEmail, clientName, subject, body, projectId);
    }
}