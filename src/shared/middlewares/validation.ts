import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationChain } from 'express-validator';
import { ValidationError } from '../utils/errors';

/**
 * Validation middleware using express-validator
 * 
 * Laravel equivalent: FormRequest validation
 * 
 * Usage:
 * router.post('/login', 
 *   validate([
 *     body('email').isEmail(),
 *     body('password').isLength({ min: 6 })
 *   ]),
 *   loginController
 * );
 */
export const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        // Run all validations
        await Promise.all(validations.map((validation) => validation.run(req)));

        // Check for errors
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            return next();
        }

        // Format errors
        const formattedErrors: Record<string, string[]> = {};

        errors.array().forEach((error) => {
            if (error.type === 'field') {
                const field = error.path;
                if (!formattedErrors[field]) {
                    formattedErrors[field] = [];
                }
                formattedErrors[field].push(error.msg);
            }
        });

        // Throw validation error
        throw new ValidationError('Validation failed', formattedErrors);
    };
};