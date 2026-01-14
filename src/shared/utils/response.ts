import { Response } from 'express';
import { ApiResponse, PaginatedResponse } from '../types';

/**
 * Send success response
 */
export const sendSuccess = <T>(
    res: Response,
    message: string,
    data?: T,
    statusCode = 200
): Response => {
    const response: ApiResponse<T> = {
        success: true,
        message,
        data,
    };

    return res.status(statusCode).json(response);
};

/**
 * Send paginated response
 */
export const sendPaginated = <T>(
    res: Response,
    message: string,
    data: T[],
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    },
    statusCode = 200
): Response => {
    const response: ApiResponse<PaginatedResponse<T>> = {
        success: true,
        message,
        data: {
            data,
            meta,
        },
    };

    return res.status(statusCode).json(response);
};

/**
 * Send error response
 */
export const sendError = (
    res: Response,
    message: string,
    statusCode = 500,
    errors?: Record<string, string[]>
): Response => {
    const response = {
        success: false,
        message,
        ...(errors && { errors }),
    };

    return res.status(statusCode).json(response);
};

/**
 * Send created response (201)
 */
export const sendCreated = <T>(
    res: Response,
    message: string,
    data?: T
): Response => {
    return sendSuccess(res, message, data, 201);
};

/**
 * Send no content response (204)
 */
export const sendNoContent = (res: Response): Response => {
    return res.status(204).send();
};