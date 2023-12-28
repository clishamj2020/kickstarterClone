// Route file to handle the API routes for project endpoints
import express from 'express';
import { protect } from '../middleware/authMiddleware';
import {
    loginUserHandler,
    getUsersHandler,
    createUserHandler,
    getUserHandler,
    updateUserHandler,
    deleteUserHandler,
} from '../controllers/userController';
const userRoutes = express.Router();

userRoutes.route('/').get(protect, getUsersHandler).post(createUserHandler);

userRoutes
    .route('/:id')
    .get(getUserHandler)
    .put(protect, updateUserHandler)
    .delete(protect, deleteUserHandler);

userRoutes.route('/login').post(loginUserHandler);

export default userRoutes;
