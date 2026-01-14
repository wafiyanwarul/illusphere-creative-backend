import { Request, Response, NextFunction } from 'express';
import { ApiError, ValidationError } from '../utils/errors';
import { logger } from '../utils/logger';
import { env } from '../../config/env';

/**
 * Global error handler middleware
 * Catches all errors and formats response
 * 
 * Laravel equivalent: app/Exceptions/Handler.php
 */
export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Log error
    logger.error(`${err.name}: ${err.message}`);

    // Log stack trace in development
    if (env.NODE_ENV === 'development') {
        logger.error(err.stack || '');
    }

    // Handle operational errors (ApiError)
    if (err instanceof ApiError) {
        const response: any = {
            success: false,
            message: err.message,
        };

        // Include validation errors if ValidationError
        if (err instanceof ValidationError) {
            response.errors = err.errors;
        }

        // Include stack trace in development
        if (env.NODE_ENV === 'development') {
            response.stack = err.stack;
        }

        return res.status(err.statusCode).json(response);
    }

    // Handle Prisma errors
    if (err.constructor.name.startsWith('Prisma')) {
        return res.status(400).json({
            success: false,
            message: 'Database error occurred',
            ...(env.NODE_ENV === 'development' && { details: err.message }),
        });
    }

    // Handle unexpected errors (500)
    return res.status(500).json({
        success: false,
        message: env.NODE_ENV === 'production'
            ? 'Internal server error'
            : err.message,
        ...(env.NODE_ENV === 'development' && { stack: err.stack }),
    });
};

/**
 * 404 Not Found handler
 * Must be placed after all routes
 */
export const notFoundHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.path} not found`,
    });
};