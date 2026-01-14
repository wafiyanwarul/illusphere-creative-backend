import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticatedRequest, JwtPayload } from '../types';
import { UnauthorizedError, ForbiddenError } from '../utils/errors';
import { env } from '../../config/env';
import { UserRole } from '@prisma/client';

/**
 * JWT authentication middleware
 * Verifies JWT token and attaches user to request
 * 
 * Laravel equivalent: auth middleware + Sanctum/Passport
 * 
 * Usage:
 * router.get('/profile', authenticate, getProfile);
 */
export const authenticate = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedError('No token provided');
        }

        const token = authHeader.substring(7); // Remove 'Bearer ' prefix

        // Verify token
        const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload;

        // Attach user to request
        req.user = decoded;

        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            throw new UnauthorizedError('Invalid token');
        }
        if (error instanceof jwt.TokenExpiredError) {
            throw new UnauthorizedError('Token expired');
        }
        throw error;
    }
};

/**
 * Role-based authorization middleware
 * Checks if authenticated user has required role
 * 
 * Laravel equivalent: can() / Gate / Policy
 * 
 * Usage:
 * router.delete('/projects/:id', 
 *   authenticate, 
 *   authorize(['PM', 'ADMIN']), 
 *   deleteProject
 * );
 */
export const authorize = (allowedRoles: UserRole[]) => {
    return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        if (!req.user) {
            throw new UnauthorizedError('Authentication required');
        }

        if (!allowedRoles.includes(req.user.role)) {
            throw new ForbiddenError(
                `Access denied. Required roles: ${allowedRoles.join(', ')}`
            );
        }

        next();
    };
};