import { Router } from 'express';
import * as authController from './auth.controller';
import { validate } from '../../shared/middlewares/validation';
import { authenticate } from '../../shared/middlewares/auth';
import { authLimiter } from '../../shared/middlewares/rateLimit';
import {
    registerValidation,
    loginValidation,
    refreshTokenValidation,
} from './auth.validation';

const router = Router();

/**
 * @route   POST /api/v1/auth/register
 * @desc    Register new user (Admin/PM/Tech Lead)
 * @access  Public (but should be restricted in production)
 */
router.post(
    '/register',
    validate(registerValidation),
    authController.register
);

/**
 * @route   POST /api/v1/auth/login
 * @desc    Login user
 * @access  Public
 */
router.post(
    '/login',
    authLimiter, // Rate limit: 5 attempts per 15 minutes
    validate(loginValidation),
    authController.login
);

/**
 * @route   POST /api/v1/auth/refresh
 * @desc    Refresh access token
 * @access  Public
 */
router.post(
    '/refresh',
    validate(refreshTokenValidation),
    authController.refreshToken
);

/**
 * @route   GET /api/v1/auth/me
 * @desc    Get current user info
 * @access  Private (requires authentication)
 */
router.get(
    '/me',
    authenticate,
    authController.getCurrentUser
);

/**
 * @route   POST /api/v1/auth/logout
 * @desc    Logout user
 * @access  Private (requires authentication)
 */
router.post(
    '/logout',
    authenticate,
    authController.logout
);

export default router;