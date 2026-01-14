import dotenv from 'dotenv';
import { cleanEnv, str, num, url } from 'envalid';

// Load .env file
dotenv.config();

// Validate and export environment variables
export const env = cleanEnv(process.env, {
    // Server
    NODE_ENV: str({
        choices: ['development', 'production', 'test'],
        default: 'development',
    }),
    PORT: num({ default: 5000 }),
    API_VERSION: str({ default: 'v1' }),

    // Database
    DATABASE_URL: str({
        desc: 'PostgreSQL connection string',
    }),

    // JWT
    JWT_SECRET: str({
        desc: 'Secret key for JWT signing',
    }),
    JWT_REFRESH_SECRET: str({
        desc: 'Secret key for refresh token',
    }),
    JWT_EXPIRES_IN: str({ default: '15m' }),
    JWT_REFRESH_EXPIRES_IN: str({ default: '7d' }),

    // CORS
    CORS_ORIGIN: str({
        default: 'http://localhost:3000',
        desc: 'Allowed CORS origins (comma-separated)',
    }),

    // File Upload
    MAX_FILE_SIZE: num({ default: 10485760 }), // 10MB
    MAX_FILES: num({ default: 5 }),

    // Supabase
    SUPABASE_URL: url(),
    SUPABASE_ANON_KEY: str(),
    SUPABASE_SERVICE_KEY: str(),
    SUPABASE_STORAGE_BUCKET: str({ default: 'project-references' }),

    // Rate Limiting
    RATE_LIMIT_WINDOW_MS: num({ default: 900000 }), // 15 minutes
    RATE_LIMIT_MAX_REQUESTS: num({ default: 100 }),
});