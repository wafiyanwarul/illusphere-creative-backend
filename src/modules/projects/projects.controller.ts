// src/modules/projects/projects.controller.ts
import { Request, Response, NextFunction } from 'express';
import { ProjectService } from './projects.service';
import { sendCreated } from '../../shared/utils/response';
import { ProjectSubmissionRequest, ProjectSubmissionResponse } from './projects.types';
import { BadRequestError } from '../../shared/utils/errors';

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