import { protect } from '../middleware/authMiddleware';

// Route file to handle the API routes for project endpoints
import express from 'express';
import {
    getProjectsHandler,
    createProjectHandler,
    getProjectHandler,
    updateProjectHandler,
    deleteProjectHandler,
} from '../controllers/projectController';
const projectRoutes = express.Router();

projectRoutes
    .route('/')
    .get(getProjectsHandler)
    .post(protect, createProjectHandler);

projectRoutes
    .route('/:id')
    .get(getProjectHandler)
    .put(protect, updateProjectHandler)
    .delete(protect, deleteProjectHandler);

export default projectRoutes;
