import { Router } from 'express';
import * as paymentController from './payments.controller';
import { authenticate, authorize } from '../../shared/middlewares/auth';

const router = Router();

router.post(
    '/projects/:id/invoices',
    authenticate,
    authorize(['ADMIN', 'PM']),
    paymentController.generateInvoices
);

router.patch(
    '/invoices/:id/pay',
    authenticate,
    authorize(['ADMIN', 'PM']), // atau buat client kalau mau self-pay dummy
    paymentController.mockPayInvoice
);

router.post(
    '/callback',
    paymentController.handleTripayCallback
);

export default router;