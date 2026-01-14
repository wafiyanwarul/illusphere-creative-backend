import { JwtPayload } from './index';

// Extend Express Request type to include user property
declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
        }
    }
}

export { };