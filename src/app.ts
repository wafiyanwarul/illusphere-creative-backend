import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { corsOptions } from './config/cors';
import { env } from './config/env';
import { errorHandler, notFoundHandler } from './shared/middlewares/error';
import { apiLimiter } from './shared/middlewares/rateLimit';
import { logger } from './shared/utils/logger';

// Create Express application
const app: Application = express();

// ============================================
// SECURITY MIDDLEWARE
// ============================================

// Helmet - Set security headers
app.use(helmet());

// CORS - Cross-Origin Resource Sharing
app.use(cors(corsOptions));

// ============================================
// BODY PARSING MIDDLEWARE
// ============================================

// Parse JSON bodies
app.use(express.json({ limit: '10mb' }));

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ============================================
// LOGGING MIDDLEWARE
// ============================================

// Morgan - HTTP request logger
if (env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    // Custom morgan format for production
    app.use(
        morgan('combined', {
            stream: {
                write: (message: string) => logger.http(message.trim()),
            },
        })
    );
}

// ============================================
// RATE LIMITING
// ============================================

// Apply general rate limiting to all routes
app.use(`/api/${env.API_VERSION}`, apiLimiter);

// ============================================
// HEALTH CHECK ROUTE
// ============================================

app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    });
});

// ============================================
// API ROUTES
// ============================================

// Root route
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Illusphere Creative API',
        version: env.API_VERSION,
        documentation: '/api-docs', // TODO: Add Swagger docs
    });
});

// API v1 routes
// TODO: Import and mount route modules here
// Example:
// import authRoutes from './modules/auth/auth.routes';
// import projectRoutes from './modules/projects/project.routes';
// app.use(`/api/${env.API_VERSION}/auth`, authRoutes);
// app.use(`/api/${env.API_VERSION}/projects`, projectRoutes);

// ============================================
// ERROR HANDLING
// ============================================

// 404 handler - Must be after all routes
app.use(notFoundHandler);

// Global error handler - Must be last
app.use(errorHandler);

export default app;