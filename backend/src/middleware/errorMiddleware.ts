import { type Response, type Request, type NextFunction } from 'express';
import type HttpException from '../utils/httpException';
import { NODE_ENV } from '../utils/config';

export const errorHandler = (
    err: HttpException,
    req: Request,
    res: Response,
    next: NextFunction,
): Response => {
    const status = err.status ?? 500;
    const message = err.message ?? 'Something went wrong';

    return res.status(status).json({
        message,
        stack: NODE_ENV === 'production' ? null : err.stack,
    });
};

// If we aren't in production, give us the error stack
