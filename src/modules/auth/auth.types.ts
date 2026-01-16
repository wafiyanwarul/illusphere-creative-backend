import { UserRole } from '@prisma/client';

// ============================================
// REQUEST TYPES
// ============================================

export interface RegisterRequest {
    email: string;
    password: string;
    name: string;
    role?: UserRole;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RefreshTokenRequest {
    refreshToken: string;
}

// ============================================
// RESPONSE TYPES
// ============================================

export interface AuthResponse {
    user: {
        id: string;
        email: string;
        name: string;
        role: UserRole;
    };
    tokens: {
        accessToken: string;
        refreshToken: string;
    };
}

export interface UserResponse {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

// ============================================
// SERVICE TYPES
// ============================================

export interface TokenPayload {
    userId: string;
    email: string;
    role: UserRole;
}

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}