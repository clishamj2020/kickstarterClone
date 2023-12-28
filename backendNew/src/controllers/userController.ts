// Controller to maintain the logic to the user endpoints
// Doesn't have to worry about logic as that responsibility falls
// to the services. All errors are handled in services / sanitizers
import { type Response, type Request } from 'express';
import asyncHandler from 'express-async-handler';
import {
    deleteUserById,
    createUser,
    getUserById,
    getUsers,
    updateUserById,
    loginUser,
} from '../services/userService';
import { type UserSanitizedType, type UserType } from '../types/userTypes';
// @desc Get all users
// @route GET /api/users
// @access Public
export const getUsersHandler = asyncHandler(
    async (req: Request, res: Response) => {
        const users = await getUsers();
        res.status(200).json(users);
    },
);

// @desc Create a new user
// @route POST /api/users
// @access Public
export const createUserHandler = asyncHandler(
    async (req: Request, res: Response) => {
        const user = await createUser(req.body as UserType);
        res.status(201).json({ message: 'User created', user });
    },
);

// @desc login a User
// @route POST /api/users/login
// @access Public
export const loginUserHandler = asyncHandler(
    async (req: Request, res: Response) => {
        // Have to declare the types of email and password first
        const { email, password }: UserSanitizedType = req.body;
        const user = await loginUser(email, password);
        res.status(201).json(user);
    },
);

// @desc Get a user by id
// @route GET /api/users/:id
// @access Public
export const getUserHandler = asyncHandler(
    async (req: Request, res: Response) => {
        const user = await getUserById(req.params.id);
        res.status(200).json(user);
    },
);

// @desc Update a user by id
// @route PUT /api/users/:id
// @access Private
export const updateUserHandler = asyncHandler(
    async (req: Request, res: Response) => {
        // Extra param {new: true} awaits the new title
        const user = await updateUserById(req.params.id, req.body as UserType);
        res.status(200).json(user);
    },
);

// @desc Delete a user by id
// @route DELETE /api/users/:id
// @access Private
export const deleteUserHandler = asyncHandler(
    async (req: Request, res: Response) => {
        await deleteUserById(req.params.id);
        res.status(200).json({ message: `User ${req.params.id} deleted` });
    },
);
