// Base API Error class
export class ApiError extends Error {
    public statusCode: number;
    public isOperational: boolean;

    constructor(message: string, statusCode: number, isOperational = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;

        Object.setPrototypeOf(this, ApiError.prototype);
        Error.captureStackTrace(this, this.constructor);
    }
}

// 400 Bad Request
export class BadRequestError extends ApiError {
    constructor(message = 'Bad Request') {
        super(message, 400);
    }
}

// 401 Unauthorized
export class UnauthorizedError extends ApiError {
    constructor(message = 'Unauthorized') {
        super(message, 401);
    }
}

// 403 Forbidden
export class ForbiddenError extends ApiError {
    constructor(message = 'Forbidden') {
        super(message, 403);
    }
}

// 404 Not Found
export class NotFoundError extends ApiError {
    constructor(message = 'Resource not found') {
        super(message, 404);
    }
}

// 409 Conflict
export class ConflictError extends ApiError {
    constructor(message = 'Conflict') {
        super(message, 409);
    }
}

// 422 Unprocessable Entity (Validation Error)
export class ValidationError extends ApiError {
    public errors: Record<string, string[]>;

    constructor(message = 'Validation failed', errors: Record<string, string[]> = {}) {
        super(message, 422);
        this.errors = errors;
    }
}

// 429 Too Many Requests
export class TooManyRequestsError extends ApiError {
    constructor(message = 'Too many requests') {
        super(message, 429);
    }
}

// 500 Internal Server Error
export class InternalServerError extends ApiError {
    constructor(message = 'Internal server error') {
        super(message, 500, false);
    }
}