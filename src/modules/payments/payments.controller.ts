import { createHmac, timingSafeEqual } from 'crypto';
import { Request, Response, NextFunction } from 'express';
import { PaymentService } from './payments.service';
import { sendCreated, sendSuccess } from '../../shared/utils/response';
import { BadRequestError } from '../../shared/utils/errors';
import { env } from '../../config/env';

const paymentService = new PaymentService();

const isValidSignature = (incomingSignature: string, payload: string): boolean => {
    const expectedSignature = createHmac('sha256', env.TRIPAY_PRIVATE_KEY)
        .update(payload)
        .digest('hex')
        .toLowerCase();

    const normalizedIncoming = incomingSignature.trim().toLowerCase();

    if (normalizedIncoming.length !== expectedSignature.length) {
        return false;
    }

    return timingSafeEqual(
        Buffer.from(normalizedIncoming, 'utf8'),
        Buffer.from(expectedSignature, 'utf8')
    );
};

export const generateInvoices = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!id) {
            throw new BadRequestError('Project ID wajib disertakan');
        }

        const result = await paymentService.generateInvoices(id);
        return sendCreated(res, 'Invoices generated', result);
    } catch (error) {
        next(error);
    }
};

export const mockPayInvoice = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!id) {
            throw new BadRequestError('Invoice ID wajib disertakan');
        }

        const updated = await paymentService.mockPayInvoice(id);
        return sendSuccess(res, 'Payment mocked as PAID', updated);
    } catch (error) {
        next(error);
    }
};

export const handleTripayCallback = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const signature = req.get('x-callback-signature') ?? req.get('x-signature');
        const rawBody = (req as Request & { rawBody?: string }).rawBody;
        const payload = rawBody ?? JSON.stringify(data);

        if (!signature || !isValidSignature(signature, payload)) {
            throw new BadRequestError('Invalid signature');
        }

        const reference = typeof data?.reference === 'string' ? data.reference : '';
        const status = typeof data?.status === 'string' ? data.status : '';

        if (!reference) {
            throw new BadRequestError('Reference callback tidak valid');
        }

        if (status === 'PAID') {
            await paymentService.updatePaymentFromCallback(reference, status);
        }

        return sendSuccess(res, 'Callback received');
    } catch (error) {
        next(error);
    }
};
