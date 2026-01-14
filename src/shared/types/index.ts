import { Request } from 'express';
import { UserRole } from '@prisma/client';

// ============================================
// API RESPONSE TYPES
// ============================================

export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    meta?: {
        page?: number;
        limit?: number;
        total?: number;
        totalPages?: number;
    };
}

export interface ApiError {
    success: false;
    message: string;
    errors?: Record<string, string[]>;
    stack?: string;
}

// ============================================
// AUTHENTICATION TYPES
// ============================================

export interface JwtPayload {
    userId: string;
    email: string;
    role: UserRole;
    iat?: number;
    exp?: number;
}

export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}

export interface AuthenticatedRequest extends Request {
    user?: JwtPayload;
}

// ============================================
// PAGINATION TYPES
// ============================================

export interface PaginationParams {
    page: number;
    limit: number;
    skip: number;
}

export interface PaginatedResponse<T> {
    data: T[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

// ============================================
// FILTER & SORT TYPES
// ============================================

export interface ProjectFilters {
    status?: string[];
    category?: string[];
    clientId?: string;
    dateFrom?: Date;
    dateTo?: Date;
    search?: string;
}

export interface SortOptions {
    field: string;
    order: 'asc' | 'desc';
}

// ============================================
// FILE UPLOAD TYPES
// ============================================

export interface UploadedFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    buffer: Buffer;
}

export interface FileUploadResult {
    fileName: string;
    fileUrl: string;
    fileSize: number;
    fileType: string;
}