import app from './app';
import { env } from './config/env';
import { prisma, disconnectDatabase } from './config/database';
import { logger } from './shared/utils/logger';

const PORT = env.PORT || 5000;

// Start server
const server = app.listen(PORT, () => {
    logger.info(`🚀 Server running on port ${PORT}`);
    logger.info(`📝 Environment: ${env.NODE_ENV}`);
    logger.info(`🌐 API version: ${env.API_VERSION}`);
    logger.info(`🔗 Health check: http://localhost:${PORT}/health`);
});

// Test database connection
prisma.$connect()
    .then(() => {
        logger.info('✅ Database connected successfully');
    })
    .catch((error) => {
        logger.error('❌ Database connection failed:', error);
        process.exit(1);
    });

// ============================================
// GRACEFUL SHUTDOWN HANDLERS
// ============================================

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
    logger.error('❌ Uncaught Exception:', error);
    process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason: any) => {
    logger.error('❌ Unhandled Rejection:', reason);
    process.exit(1);
});

// Handle SIGTERM (Docker, Kubernetes)
process.on('SIGTERM', async () => {
    logger.info('👋 SIGTERM received, shutting down gracefully...');

    server.close(async () => {
        logger.info('🔌 HTTP server closed');

        try {
            await disconnectDatabase();
            logger.info('🔌 Database disconnected');
            process.exit(0);
        } catch (error) {
            logger.error('❌ Error during shutdown:', error);
            process.exit(1);
        }
    });
});

// Handle SIGINT (Ctrl+C)
process.on('SIGINT', async () => {
    logger.info('👋 SIGINT received, shutting down gracefully...');

    server.close(async () => {
        logger.info('🔌 HTTP server closed');

        try {
            await disconnectDatabase();
            logger.info('🔌 Database disconnected');
            process.exit(0);
        } catch (error) {
            logger.error('❌ Error during shutdown:', error);
            process.exit(1);
        }
    });
});