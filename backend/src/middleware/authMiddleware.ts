import { verifyToken } from '../services/tokenService';
import { getUserById } from '../services/userService';
import { type UserReturnType, type UserType } from '../types/userTypes';
import HttpException from '../utils/httpException';
import { type NextFunction, type Request, type Response } from 'express';

import asyncHandler from 'express-async-handler';

export interface GetUserAuthInfoRequest extends Request {
    user?: UserType;
}

export interface AuthorizedUserRequest extends Request {
    user?: UserReturnType;
}

export const protect = asyncHandler(
    async (req: GetUserAuthInfoRequest, res: Response, next: NextFunction) => {
        // expect {headers: {authorization: "Bearer token""}}
        if (
            req.headers?.authorization == null ||
            req.headers?.authorization === '' ||
            req.headers?.authorization === undefined ||
            !req.headers.authorization.startsWith('Bearer ')
        ) {
            throw new HttpException('Unauthorized', 401);
        }

        const token = req.headers.authorization.split(' ')[1];
        const decoded = verifyToken(token);
        req.user = await getUserById(decoded._id);
        next();
    },
);
