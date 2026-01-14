import rateLimit from 'express-rate-limit';
import { env } from '../../config/env';

/**
 * General API rate limiter
 * 100 requests per 15 minutes
 * 
 * Laravel equivalent: throttle middleware
 */
export const apiLimiter = rateLimit({
    windowMs: env.RATE_LIMIT_WINDOW_MS, // 15 minutes
    max: env.RATE_LIMIT_MAX_REQUESTS, // 100 requests
    message: {
        success: false,
        message: 'Too many requests, please try again later.',
    },
    standardHeaders: true, // Return rate limit info in headers
    legacyHeaders: false,
});

/**
 * Strict rate limiter for authentication routes
 * 5 requests per 15 minutes
 * 
 * Prevents brute force attacks
 */
export const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 requests per window
    message: {
        success: false,
        message: 'Too many login attempts, please try again after 15 minutes.',
    },
    skipSuccessfulRequests: true, // Don't count successful logins
    standardHeaders: true,
    legacyHeaders: false,
});

/**
 * File upload rate limiter
 * 10 uploads per hour
 * 
 * Prevents storage abuse (ingat: max 5 files, 10MB total per project)
 */
export const uploadLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // 10 uploads per hour
    message: {
        success: false,
        message: 'Upload limit reached. Maximum 10 uploads per hour.',
    },
    standardHeaders: true,
    legacyHeaders: false,
});

/**
 * Project submission rate limiter
 * 3 submissions per day
 * 
 * Prevents spam project requests
 */
export const projectSubmissionLimiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 hours
    max: 3, // 3 submissions per day
    message: {
        success: false,
        message: 'Maximum 3 project submissions per day. Please try again tomorrow.',
    },
    // Use email from body for rate limiting (more accurate than IP)
    keyGenerator: (req) => {
        return req.body?.email || 'anonymous';
    },
    skip: (req) => !req.body?.email, // Skip if no email provided
    standardHeaders: true,
    legacyHeaders: false,
});