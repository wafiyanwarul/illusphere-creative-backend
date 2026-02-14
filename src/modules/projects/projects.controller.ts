// src/modules/projects/projects.controller.ts
import { Request, Response, NextFunction } from 'express';
import { ProjectService } from './projects.service';
import { sendCreated, sendSuccess } from '../../shared/utils/response';
import { ProjectSubmissionRequest, ProjectSubmissionResponse } from './projects.types';
import { BadRequestError, NotFoundError, UnauthorizedError } from '../../shared/utils/errors';
import { AuthenticatedRequest } from '../../shared/types';
import { ProjectStatus } from '../../../generated/prisma';
import { prisma } from '../../config/database';

const projectService = new ProjectService();

/**
 * Submit new project request from client
 * POST /api/v1/projects/submit
 */
export const submitProject = async (
    req: Request<{}, {}, ProjectSubmissionRequest>,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = req.body;

        // Optional: tambah validasi manual kalau express-validator belum attach
        if (!data.clientEmail || !data.projectName || data.selectedServices.length === 0) {
            throw new BadRequestError('Missing required fields: clientEmail, projectName, or selectedServices');
        }

        const result = await projectService.submitProject(data);

        // Format response sesuai types
        const responseData: ProjectSubmissionResponse = {
            referenceId: result.referenceId,
            projectId: result.project.id,
            estimatedMin: result.project.estimatedMin,
            estimatedMax: result.project.estimatedMax,
            message: 'Project request submitted successfully! Kami akan review dalam 24 jam.',
        };

        return sendCreated(res, 'Project submitted successfully', responseData);
    } catch (error) {
        return next(error); // Lempar ke errorHandler middleware
    }
};

/**
 * Get project details by reference ID
 * GET /api/v1/projects/:referenceId
 */
export const getProjectByReferenceId = async (
    req: AuthenticatedRequest<{ referenceId: string }>,
    res: Response,
    next: NextFunction
) => {
    try {
        const { referenceId } = req.params;

        if (!referenceId) {
            throw new BadRequestError('Reference ID wajib disertakan');
        }

        // Wajib punya token client
        if (!req.user?.clientId || req.user?.type !== 'client') {
            throw new UnauthorizedError('Login diperlukan untuk melihat detail project');
        }

        // Verifikasi project milik client ini
        const project = await prisma.project.findFirst({
            where: {
                referenceId,
                clientId: req.user.clientId,
            },
            include: {
                // include yang sama seperti sebelumnya
                client: {
                    select: { fullName: true, email: true },
                },
                projectServices: {
                    include: {
                        service: { select: { name: true, slug: true } },
                        complexityOption: { select: { name: true } },
                    },
                },
                projectAdditionalServices: {
                    include: {
                        additionalService: { select: { name: true } },
                    },
                },
                activities: {
                    orderBy: { createdAt: 'desc' },
                    take: 10,
                },
            },
        });

        if (!project) {
            throw new NotFoundError('Project tidak ditemukan atau bukan milik Anda');
        }

        // Format response seperti sebelumnya (full data karena udah verified)
        const responseData = {
            referenceId: project.referenceId,
            projectName: project.projectName,
            status: project.status,
            estimatedMin: project.estimatedMin,
            estimatedMax: project.estimatedMax,
            timeline: project.timeline,
            description: project.description,
            client: {
                fullName: project.client.fullName,
                email: project.client.email,
            },
            services: project.projectServices.map(ps => ({
                serviceName: ps.service?.name,
                complexityName: ps.complexityOption?.name,
                selectedMinPrice: ps.selectedMinPrice,
                selectedMaxPrice: ps.selectedMaxPrice,
            })),
            additionalServices: project.projectAdditionalServices.map(pas => ({
                name: pas.additionalService?.name,
                selectedMinPrice: pas.selectedMinPrice,
                selectedMaxPrice: pas.selectedMaxPrice,
            })),
            recentActivities: project.activities.map(act => ({
                type: act.type,
                action: act.action,
                description: act.description,
                createdAt: act.createdAt,
            })),
        };

        return sendSuccess(res, 'Project details retrieved', responseData);
    } catch (error) {
        return next(error);
    }
};

/**
 * Get list of all projects (for admin/PM dashboard)
 * GET /api/v1/projects
 * @access Protected (ADMIN, PM, TECH_LEAD)
 */
export const getAllProjects = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const { status, page = '1', limit = '10' } = req.query;

        const pageNum = Number.parseInt(page as string, 10) || 1;
        const limitNum = Number.parseInt(limit as string, 10) || 10;

        if (pageNum < 1 || limitNum < 1) {
            throw new BadRequestError('Page dan limit harus angka positif');
        }

        const filters: { status?: ProjectStatus } = {};
        if (status && typeof status === 'string') {
            filters.status = status as ProjectStatus;
        }

        const result = await projectService.getAllProjects({
            status: filters.status,
            page: pageNum,
            limit: limitNum,
        });

        return sendSuccess(res, 'Projects retrieved successfully', result);
    } catch (error) {
        return next(error);
    }
};

/**
 * Update project status (for PM/Admin)
 * PATCH /api/v1/projects/:id/status
 * @access Protected (ADMIN, PM)
 */
export const updateProjectStatus = async (
    req: AuthenticatedRequest<{ id: string }, {}, { status?: string; note?: string }>,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const { status, note } = req.body; // status wajib, note optional

        if (!id) {
            throw new BadRequestError('Project ID wajib disertakan');
        }

        if (!status || !Object.values(ProjectStatus).includes(status as ProjectStatus)) {
            throw new BadRequestError('Status tidak valid. Pilih dari: PENDING_REVIEW, DEALING, IN_PROGRESS, IN_REVISION, COMPLETED, CANCELLED');
        }

        if (note !== undefined && typeof note !== 'string') {
            throw new BadRequestError('Note harus berupa string');
        }

        const updated = await projectService.updateProjectStatus(
            id,
            status as ProjectStatus,
            req.user?.userId, // Dari JWT (siapa yang update)
            note
        );

        return sendSuccess(res, `Status updated to ${status}`, {
            projectId: updated.id,
            newStatus: updated.status,
            updatedAt: updated.updatedAt,
            note: note || null,
        });
    } catch (error) {
        return next(error);
    }
};

/**
 * Update final price of a project (admin/PM only)
 * PATCH /api/v1/projects/:id/price
 */
/**
 * Update final price of a project (admin/PM only)
 * PATCH /api/v1/projects/:id/price
 */
export const updateFinalPrice = async (
    req: AuthenticatedRequest<{ id: string }>,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const { finalPrice, note } = req.body;

        if (!id) throw new BadRequestError('Project ID wajib');
        if (typeof finalPrice !== 'number' || finalPrice <= 0) throw new BadRequestError('Final price harus angka positif');

        const updated = await projectService.updateFinalPrice(
            id,
            finalPrice,
            req.user?.userId,
            note
        );

        return sendSuccess(res, 'Final price updated', {
            projectId: updated.id,
            finalPrice: updated.finalPrice,
            updatedAt: updated.updatedAt,
            note: note || null,
        });
    } catch (error) {
        return next(error);
    }
};

/**
 * Add note/comment to a project (admin/PM only)
 * POST /api/v1/projects/:id/notes
 */
export const addProjectNote = async (
    req: AuthenticatedRequest<{ id: string }>,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const { note } = req.body;

        if (!id) throw new BadRequestError('Project ID wajib');
        if (!note || typeof note !== 'string' || note.trim() === '') {
            throw new BadRequestError('Note wajib diisi dan tidak boleh kosong');
        }

        await projectService.addProjectNote(
            id,
            note.trim(),
            req.user?.userId
        );

        return sendSuccess(res, 'Note berhasil ditambahkan');
    } catch (error) {
        return next(error);
    }
};
