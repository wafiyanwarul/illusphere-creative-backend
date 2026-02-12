// src/modules/projects/projects.client.controller.ts
import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../config/database';
import { sendSuccess } from '../../shared/utils/response';
import { UnauthorizedError } from '../../shared/utils/errors';
import { AuthenticatedRequest } from '../../shared/types'; // adjust kalau path beda

export const getMyProjects = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.user || req.user.type !== 'client') {
            throw new UnauthorizedError('Akses hanya untuk client');
        }

        const clientId = req.user.clientId;

        const projects = await prisma.project.findMany({
            where: { clientId },
            include: {
                payments: {
                    select: {
                        type: true,
                        amount: true,
                        status: true,
                        tripayInvoiceUrl: true,
                        paidAt: true,
                        expiredAt: true,
                    },
                },
                activities: {
                    select: {
                        type: true,
                        action: true,
                        description: true,
                        createdAt: true,
                    },
                    orderBy: { createdAt: 'desc' },
                    take: 10,
                },
            },
            orderBy: { submittedAt: 'desc' },
        });

        // Format response simpel & client-friendly
        const formatted = projects.map(p => ({
            id: p.id,
            referenceId: p.referenceId,
            projectName: p.projectName,
            status: p.status,
            description: p.description,
            timeline: p.timeline,
            estimatedMin: p.estimatedMin,
            estimatedMax: p.estimatedMax,
            finalPrice: p.finalPrice,
            payments: p.payments.map(pm => ({
                type: pm.type,
                amount: pm.amount,
                status: pm.status,
                paymentUrl: pm.tripayInvoiceUrl,
                paidAt: pm.paidAt,
                expiredAt: pm.expiredAt,
            })),
            recentActivities: p.activities.map(act => ({
                type: act.type,
                action: act.action,
                description: act.description,
                date: act.createdAt,
            })),
        }));

        return sendSuccess(res, 'My projects retrieved', { projects: formatted });
    } catch (error) {
        next(error);
    }
};