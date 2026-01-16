import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';
import { sendSuccess, sendCreated } from '../../shared/utils/response';
import { RegisterRequest, LoginRequest, RefreshTokenRequest } from './auth.types';
import { AuthenticatedRequest } from '../../shared/types';

const authService = new AuthService();

/**
 * Register new user
 * POST /api/v1/auth/register
 */
export const register = async (
    req: Request<{}, {}, RegisterRequest>,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await authService.register(req.body);

        return sendCreated(res, 'User registered successfully', result);
    } catch (error) {
        next(error);
    }
};

/**
 * Login user
 * POST /api/v1/auth/login
 */
export const login = async (
    req: Request<{}, {}, LoginRequest>,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await authService.login(req.body);

        return sendSuccess(res, 'Login successful', result);
    } catch (error) {
        next(error);
    }
};

/**
 * Refresh access token
 * POST /api/v1/auth/refresh
 */
export const refreshToken = async (
    req: Request<{}, {}, RefreshTokenRequest>,
    res: Response,
    next: NextFunction
) => {
    try {
        const tokens = await authService.refreshToken(req.body.refreshToken);

        return sendSuccess(res, 'Token refreshed successfully', tokens);
    } catch (error) {
        next(error);
    }
};

/**
 * Get current user info
 * GET /api/v1/auth/me
 */
export const getCurrentUser = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.user) {
            throw new Error('User not authenticated');
        }

        const user = await authService.getUserById(req.user.userId);

        return sendSuccess(res, 'User retrieved successfully', user);
    } catch (error) {
        next(error);
    }
};

/**
 * Logout user
 * POST /api/v1/auth/logout
 * 
 * Note: JWT is stateless, so logout is client-side only
 * Client should delete tokens from storage
 */
export const logout = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        // In a stateless JWT system, logout is handled client-side
        // Server just acknowledges the request
        // 
        // For enhanced security, you could:
        // 1. Implement token blacklist (Redis)
        // 2. Store refresh tokens in DB and delete on logout
        // 3. Use short-lived tokens and rely on expiration

        return sendSuccess(res, 'Logout successful');
    } catch (error) {
        next(error);
    }
};