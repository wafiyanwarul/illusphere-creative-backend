import { Request, Response, NextFunction } from 'express';
import { PaymentService } from './payments.service';
import { sendCreated, sendSuccess } from '../../shared/utils/response';
import { BadRequestError } from '../../shared/utils/errors';

const paymentService = new PaymentService();

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
