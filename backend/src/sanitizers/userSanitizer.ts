import { checkIsValidObjectId } from '../database/db';
import { emailRegex } from '../schema/userSchema';
import { type UserSanitizedType, type UserType } from '../types/userTypes';
import HttpException from '../utils/httpException';

export async function sanitizeUser(user: UserType): Promise<UserSanitizedType> {
    const sanitzedUser: UserSanitizedType = {
        username: sanitizeUsername(user.username),
        email: sanitizeEmail(user.email),
        isAdmin: sanitizeIsAdmin(user.isAdmin),
        password: await sanitizePassword(user.password),
    };
    // add other properties here if needed
    return sanitzedUser;
}

export async function sanitizeLoginUser(
    email: string,
    password: string,
): Promise<UserSanitizedType> {
    // Had to create sanitized user this way to omit certain attributes
    const sanitzedUser: UserSanitizedType = {
        username: '',
        email: sanitizeEmail(email),
        password: await sanitizePassword(password),
        isAdmin: false,
    };

    return sanitzedUser;
}

function sanitizeUsername(username: string): string {
    if (username === undefined) {
        throw new HttpException('Username is undefined', 400);
    }
    if (typeof username !== 'string') {
        throw new HttpException('Username is not a string', 400);
    }

    // Attributes
    username = username.trim();
    return username;
}

function sanitizeIsAdmin(isAdmin: boolean): boolean {
    if (!isAdmin) isAdmin = false;
    return isAdmin;
}

function sanitizeEmail(email: string): string {
    if (email === undefined) {
        throw new HttpException('Email is undefined', 400);
    }
    if (typeof email !== 'string') {
        throw new HttpException('Email is not a string', 400);
    }

    // Attributes
    email = email.trim();
    if (email.length < 6) {
        throw new HttpException('Email must be at least 6 characters', 400);
    }
    if (email.length > 50) {
        throw new HttpException('Email must be less than 50 characters', 400);
    }
    if (email.match(emailRegex) == null) {
        throw new HttpException('Please add a valid email', 400);
    }
    return email;
}

async function sanitizePassword(password: string): Promise<string> {
    if (password === undefined) {
        throw new HttpException('Password is undefined', 400);
    }
    if (typeof password !== 'string') {
        throw new HttpException('Password is not a string', 400);
    }

    // Attributes
    password = password.trim();
    if (password.length < 6) {
        throw new HttpException('Password must be at least 6 characters', 400);
    }
    if (password.length > 50) {
        throw new HttpException(
            'Password must be less than 50 characters',
            400,
        );
    }

    return password;
}

export function sanitizeId(id: string | undefined): string {
    if (id === undefined) {
        throw new HttpException('UserId is undefined', 400);
    }
    checkIsValidObjectId(id);
    return id.valueOf(); // "ObjectId('idstring')";
}
