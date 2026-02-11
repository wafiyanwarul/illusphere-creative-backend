// src/modules/projects/projects.controller.ts
import { Request, Response, NextFunction } from 'express';
import { ProjectService } from './projects.service';
import { sendCreated, sendSuccess } from '../../shared/utils/response';
import { ProjectSubmissionRequest, ProjectSubmissionResponse } from './projects.types';
import { BadRequestError } from '../../shared/utils/errors';
import { AuthenticatedRequest } from '../../shared/types';
import { ProjectStatus } from '@prisma/client';

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
        next(error); // Lempar ke errorHandler middleware
    }
};

/**
 * Get project details by reference ID
 * GET /api/v1/projects/:referenceId
 */
export const getProjectByReferenceId = async (
    req: Request<{ referenceId: string }>,
    res: Response,
    next: NextFunction
) => {
    try {
        const { referenceId } = req.params;

        if (!referenceId) {
            throw new BadRequestError('Reference ID wajib disertakan');
        }

        const project = await projectService.getProjectByReferenceId(referenceId);

        // Format response simpel dulu (bisa di-expand nanti)
        const responseData = {
            referenceId: project.referenceId,
            projectName: project.projectName,
            status: project.status,
            estimatedMin: project.estimatedMin,
            estimatedMax: project.estimatedMax,
            timeline: project.timeline,
            description: project.description,
            client: project.client
                ? {
                    fullName: project.client.fullName,
                    email: project.client.email,
                }
                : null,
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
            // Tambah payments kalau udah ada module-nya nanti
        };

        return sendSuccess(res, 'Project details retrieved', responseData);
    } catch (error) {
        next(error);
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

        const pageNum = parseInt(page as string, 10) || 1;
        const limitNum = parseInt(limit as string, 10) || 10;

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
        next(error);
    }
};