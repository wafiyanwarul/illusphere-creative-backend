import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../../config/database';
import { env } from '../../config/env';
import {
    ConflictError,
    UnauthorizedError,
    NotFoundError,
} from '../../shared/utils/errors';
import {
    RegisterRequest,
    LoginRequest,
    AuthResponse,
    TokenPayload,
    Tokens,
    UserResponse,
} from './auth.types';

export class AuthService {
    /**
     * Generate JWT access token
     */
    private generateAccessToken(payload: TokenPayload): string {
        return jwt.sign(payload, env.JWT_SECRET as string, {
            expiresIn: env.JWT_EXPIRES_IN,
        } as jwt.SignOptions);
    }

    /**
     * Generate JWT refresh token
     */
    private generateRefreshToken(payload: TokenPayload): string {
        return jwt.sign(payload, env.JWT_REFRESH_SECRET as string, {
            expiresIn: env.JWT_REFRESH_EXPIRES_IN,
        } as jwt.SignOptions);
    }

    /**
     * Generate both access and refresh tokens
     */
    private generateTokens(payload: TokenPayload): Tokens {
        return {
            accessToken: this.generateAccessToken(payload),
            refreshToken: this.generateRefreshToken(payload),
        };
    }

    /**
     * Register new user (Admin/PM/Tech Lead)
     */
    async register(data: RegisterRequest): Promise<AuthResponse> {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: data.email },
        });

        if (existingUser) {
            throw new ConflictError('User with this email already exists');
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(data.password, 10);

        // Create user
        const user = await prisma.user.create({
            data: {
                email: data.email,
                password: hashedPassword,
                name: data.name,
                role: data.role || 'PM', // Default to PM
                isActive: true,
            },
        });

        // Generate tokens
        const tokens = this.generateTokens({
            userId: user.id,
            email: user.email,
            role: user.role,
        });

        return {
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
            tokens,
        };
    }

    /**
     * Login user
     */
    async login(data: LoginRequest): Promise<AuthResponse> {
        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email: data.email },
        });

        if (!user) {
            throw new UnauthorizedError('Invalid email or password');
        }

        // Check if user is active
        if (!user.isActive) {
            throw new UnauthorizedError('Account is deactivated');
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(data.password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedError('Invalid email or password');
        }

        // Generate tokens
        const tokens = this.generateTokens({
            userId: user.id,
            email: user.email,
            role: user.role,
        });

        return {
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
            tokens,
        };
    }

    /**
     * Refresh access token using refresh token
     */
    async refreshToken(refreshToken: string): Promise<Tokens> {
        try {
            // Verify refresh token
            const decoded = jwt.verify(
                refreshToken,
                env.JWT_REFRESH_SECRET
            ) as TokenPayload;

            // Check if user still exists and is active
            const user = await prisma.user.findUnique({
                where: { id: decoded.userId },
            });

            if (!user || !user.isActive) {
                throw new UnauthorizedError('Invalid refresh token');
            }

            // Generate new tokens
            return this.generateTokens({
                userId: user.id,
                email: user.email,
                role: user.role,
            });
        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) {
                throw new UnauthorizedError('Invalid refresh token');
            }
            if (error instanceof jwt.TokenExpiredError) {
                throw new UnauthorizedError('Refresh token expired');
            }
            throw error;
        }
    }

    /**
     * Get user by ID
     */
    async getUserById(userId: string): Promise<UserResponse> {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new NotFoundError('User not found');
        }

        return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            isActive: user.isActive,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    }
}