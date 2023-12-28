// Controller to maintain the logic to the project endpoints
// Doesn't have to worry about logic as that responsibility falls
// to the services. All errors are handled in services / sanitizers
import { type Response, type Request } from 'express';
import asyncHandler from 'express-async-handler';
import {
    deleteProjectById,
    createProject,
    getProjectById,
    getProjects,
    updateProjectById,
} from '../services/projectService';
import { type ProjectType } from '../types/projectTypes';
import { type AuthorizedUserRequest } from '../middleware/authMiddleware';
// @desc Get all projects
// @route GET /api/projects
// @access Public
export const getProjectsHandler = asyncHandler(
    async (req: Request, res: Response) => {
        const projects = await getProjects();
        res.status(200).json(projects);
    },
);

// @desc Create a new project
// @route POST /api/projects
// @access Private
export const createProjectHandler = asyncHandler(
    async (req: AuthorizedUserRequest, res: Response) => {
        const project = await createProject(
            req.body as ProjectType,
            req.user?._id,
        );
        res.status(201).json({ message: 'Project created', project });
    },
);

// @desc Get a project by id
// @route GET /api/projects/:id
// @access Public
export const getProjectHandler = asyncHandler(
    async (req: Request, res: Response) => {
        const project = await getProjectById(req.params.id);
        res.status(200).json(project);
    },
);

// @desc Update a project by id
// @route PUT /api/projects/:id
// @access Private
export const updateProjectHandler = asyncHandler(
    async (req: AuthorizedUserRequest, res: Response) => {
        // Extra param {new: true} awaits the new title
        const project = await updateProjectById(
            req.params.id,
            req.body as ProjectType,
            req.user?._id,
        );
        // {body: {title: string}}
        res.status(200).json(project);
    },
);

// @desc Delete a project by id
// @route DELETE /api/projects/:id
// @access Private
export const deleteProjectHandler = asyncHandler(
    async (req: AuthorizedUserRequest, res: Response) => {
        await deleteProjectById(req.params.id, req.user?._id);
        res.status(200).json({ message: `Project ${req.params.id} deleted` });
    },
);
