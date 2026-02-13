// src/modules/projects/projects.routes.ts
import { Router } from 'express';
import * as projectController from './projects.controller';
import { validate } from '../../shared/middlewares/validation';
import { projectSubmissionLimiter } from '../../shared/middlewares/rateLimit';
import { submitProjectValidation } from './projects.validation';
import { authenticate, authorize } from '../../shared/middlewares/auth';
import * as clientController from './projects.client.controller';

const router = Router();

/**
 * @route   POST /api/v1/projects/submit
 * @desc    Submit new project request dari client (form order service)
 * @access  Public (client belum login, rate limit per email)
 */
router.post(
    '/submit',
    projectSubmissionLimiter,              // 3 submissions per hari per email (anti-spam)
    validate(submitProjectValidation),     // Validasi body pake express-validator
    projectController.submitProject        // Call controller untuk proses bisnis
);

/**
 * @route   GET /api/v1/projects
 * @desc    Get list of all projects with pagination & status filter (admin/PM only)
 * @access  Protected
 */
router.get(
    '/',
    authenticate,                                   // Harus login JWT
    authorize(['ADMIN', 'PM', 'TECH_LEAD']),        // Role check dari middleware auth-mu
    projectController.getAllProjects
);

/**
 * @route   GET /api/v1/projects/my
 * @desc    Get list of projects owned by authenticated client (dashboard)
 * @access  Protected (client token only)
 */
router.get(
    '/my',
    authenticate,  // Wajib token, check type 'client' di controller
    clientController.getMyProjects
);

/**
 * @route   GET /api/v1/projects/:referenceId
 * @desc    Get project details by reference ID (untuk client pantau progress)
 * @access  Protected (client token dari /auth/client-verify)
 */
router.get(
    '/:referenceId',
    authenticate,
    projectController.getProjectByReferenceId
);

/**
 * @route   PATCH /api/v1/projects/:id/status
 * @desc    Update project status (admin/PM only)
 * @access  Protected
 */
router.patch(
    '/:id/status',
    authenticate,
    authorize(['ADMIN', 'PM']), // TECH_LEAD view only restricted)
    projectController.updateProjectStatus
);

// TODO: nanti tambah route lain kalau perlu, misal:
// router.get('/my-projects', authenticate, projectController.getMyProjects);
// router.get('/:referenceId', projectController.getProjectByRefId);

export default router;
