import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// Create PostgreSQL connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Create Prisma adapter with pg pool
const adapter = new PrismaPg(pool);

// Initialize Prisma Client with adapter (Prisma v7 requirement)
const prisma = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
});

// Graceful shutdown handler
async function disconnectDatabase() {
    await prisma.$disconnect();
    await pool.end();
}

export { prisma, disconnectDatabase };