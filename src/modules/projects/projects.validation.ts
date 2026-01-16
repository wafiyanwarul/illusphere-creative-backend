// src/modules/projects/projects.validation.ts
import { body } from 'express-validator';

/**
 * Validation rules untuk submit project request
 */
export const submitProjectValidation = [
    body('clientName')
        .trim()
        .notEmpty()
        .withMessage('Nama client wajib diisi')
        .isLength({ min: 2, max: 100 })
        .withMessage('Nama client harus 2-100 karakter'),

    body('clientEmail')
        .isEmail()
        .normalizeEmail()
        .withMessage('Email tidak valid'),

    body('clientPhone')
        .trim()
        .notEmpty()
        .withMessage('Nomor HP wajib diisi')
        .matches(/^\+?[1-9]\d{1,14}$/)
        .withMessage('Nomor HP format tidak valid'),

    body('projectName')
        .trim()
        .notEmpty()
        .withMessage('Nama project wajib diisi')
        .isLength({ min: 5 })
        .withMessage('Nama project minimal 5 karakter'),

    body('description')
        .trim()
        .notEmpty()
        .withMessage('Deskripsi project wajib diisi')
        .isLength({ min: 20 })
        .withMessage('Deskripsi minimal 20 karakter'),

    body('budgetMin')
        .isInt({ min: 0 })
        .withMessage('Budget min harus angka positif'),

    body('budgetMax')
        .isInt({ min: 0 })
        .custom((value, { req }) => {
            if (value < req.body.budgetMin) {
                throw new Error('Budget max harus lebih besar atau sama dengan budget min');
            }
            return true;
        })
        .withMessage('Budget max invalid'),

    body('selectedServices')
        .isArray({ min: 1 })
        .withMessage('Pilih minimal 1 service'),

    body('selectedServices.*.serviceId')
        .isUUID(4)
        .withMessage('Service ID harus UUID valid'),

    body('selectedServices.*.complexityId')
        .isUUID(4)
        .withMessage('Complexity ID harus UUID valid'),

    // Optional fields (ga wajib validate ketat)
    body('additionalServices')
        .optional()
        .isArray()
        .withMessage('Additional services harus array'),

    body('additionalServices.*.id')
        .optional()
        .isUUID(4)
        .withMessage('Additional service ID harus UUID valid'),
];