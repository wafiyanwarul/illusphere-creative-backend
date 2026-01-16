// src/modules/projects/projects.routes.ts
import { Router } from 'express';
import * as projectController from './projects.controller';
import { validate } from '../../shared/middlewares/validation';
import { projectSubmissionLimiter } from '../../shared/middlewares/rateLimit';
import { submitProjectValidation } from './projects.validation';

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

// TODO: nanti tambah route lain kalau perlu, misal:
// router.get('/my-projects', authenticate, projectController.getMyProjects);
// router.get('/:referenceId', projectController.getProjectByRefId);

export default router;