// Does the talking to the data base.
import bcrypt from 'bcryptjs';
import { checkIsValidObjectId } from '../database/db';
import UserModel from '../models/userModel';
import { type IUserSchema } from '../schema/userSchema';
import { type UserReturnType, type UserType } from '../types/userTypes';
import { sanitizeLoginUser, sanitizeUser } from '../sanitizers/userSanitizer';
import HttpException from '../utils/httpException';
import { generateToken } from './tokenService';

export async function getUsers(): Promise<UserType[]> {
    try {
        const users = await UserModel.find();
        return users;
    } catch (err) {
        throw new HttpException(`Error getting users' ${err}`, 400);
    }
}

export async function createUser(user: UserType): Promise<UserReturnType> {
    const sanitzedUser = await sanitizeUser(user);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(sanitzedUser.password, salt);

    try {
        const newUser = await UserModel.create({
            username: sanitzedUser.username,
            email: sanitzedUser.email,
            password: hashedPassword,
            isAdmin: sanitzedUser.isAdmin,
        });
        return {
            _id: newUser._id,
            username: newUser.username,
            isAdmin: newUser.isAdmin,
            email: newUser.email,
            token: generateToken({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
            }),
        };
    } catch (err) {
        throw new HttpException(`Error creating user' ${err}`, 400);
    }
}
// Using IUserSchema because it has _id
export async function getUserById(userId: string): Promise<IUserSchema> {
    checkIsValidObjectId(userId);
    try {
        const user = await UserModel.findById(userId);
        if (user == null) {
            throw new HttpException('User not found', 404);
        }
        return user;
    } catch (err) {
        throw new HttpException(`Error getting user' ${err}`, 400);
    }
}

export async function loginUser(
    email: string,
    password: string,
): Promise<UserReturnType> {
    const sanitizedUser = await sanitizeLoginUser(email, password);
    try {
        const user = await UserModel.findOne({ email });
        if (user == null) {
            throw new HttpException('User not found', 404);
        }
        // Takes password, hashes it, and compares it from saved hash
        const isPasswordValid = await bcrypt.compare(
            sanitizedUser.password,
            user.password,
        );
        if (!isPasswordValid) {
            throw new HttpException('Password is invalid', 401);
        }
        return {
            _id: user._id,
            username: user.username,
            isAdmin: user.isAdmin,
            email: user.email,
            token: generateToken({
                _id: user._id,
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin,
            }),
        };
    } catch (err) {
        throw new HttpException(`Failed to login user: ${err.message}`, 401);
    }
}

export async function updateUserById(
    userId: string,
    user: UserType,
): Promise<IUserSchema> {
    checkIsValidObjectId(userId);
    const sanitzedUser = sanitizeUser(user);
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            sanitzedUser,
            { new: true },
        );
        if (updatedUser == null) {
            throw new HttpException('User not found', 404);
        }
        return updatedUser;
    } catch (err) {
        throw new HttpException(`Error updating user' ${err}`, 400);
    }
}

export async function deleteUserById(userId: string): Promise<void> {
    checkIsValidObjectId(userId);
    try {
        const user = await UserModel.findByIdAndDelete(userId);
        if (user == null) {
            throw new HttpException('User not found', 404);
        }
    } catch (err) {
        throw new HttpException(`Error deleting user' ${err}`, 400);
    }
}
