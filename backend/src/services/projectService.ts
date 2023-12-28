// Does the talking to the data base.
import { checkIsValidObjectId } from '../database/db';
import ProjectModel from '../models/projectModel';
import { type IProjectSchema } from '../schema/projectSchema';
import { type ProjectType } from '../types/projectTypes';
import { sanitizeProject } from '../sanitizers/projectSanitizer';
import HttpException from '../utils/httpException';
import { sanitizeId } from '../sanitizers/userSanitizer';

export async function getProjects(): Promise<ProjectType[]> {
    try {
        const projects = await ProjectModel.find();
        if (projects == null) {
            throw new HttpException('Projects not found', 404);
        }
        return projects;
    } catch (err) {
        throw new HttpException(`Error getting projects ${err}`, 400);
    }
}

export async function createProject(
    project: ProjectType,
    userId: string | undefined,
): Promise<ProjectType> {
    const sanitizedProject = sanitizeProject(project, userId);
    try {
        const newProject = await ProjectModel.create(sanitizedProject);
        if (newProject == null) {
            throw new HttpException('Project not created', 400);
        }
        return newProject;
    } catch (err) {
        throw new HttpException(`Error creating project ${err}`, 400);
    }
}
// Using IProjectSchema because it has _id
export async function getProjectById(
    projectId: string,
): Promise<IProjectSchema> {
    checkIsValidObjectId(projectId);
    try {
        const project = await ProjectModel.findById(projectId);
        if (project == null) {
            throw new HttpException('Project not found', 404);
        }
        return project;
    } catch (err) {
        throw new HttpException(`Error getting project ${err}`, 400);
    }
}

export async function updateProjectById(
    projectId: string,
    project: ProjectType,
    userId: string | undefined,
): Promise<IProjectSchema> {
    checkIsValidObjectId(projectId);
    const sanitizedProject = sanitizeProject(project, userId);
    await isUserAuthorized(userId, projectId);
    try {
        const updatedProject = await ProjectModel.findByIdAndUpdate(
            projectId,
            sanitizedProject,
            { new: true },
        );
        if (updatedProject == null) {
            throw new HttpException('Project not found', 404);
        }
        return updatedProject;
    } catch (err) {
        throw new HttpException(`Error updating project ${err}`, 400);
    }
}

export async function deleteProjectById(
    projectId: string,
    userId: string | undefined,
): Promise<void> {
    checkIsValidObjectId(projectId);
    await isUserAuthorized(userId, projectId);
    try {
        const project = await ProjectModel.findByIdAndDelete(projectId);
        if (project == null) {
            throw new HttpException('Project not found', 404);
        }
    } catch (err) {
        throw new HttpException(`Error deleting project ${err}`, 400);
    }
}

async function isUserAuthorized(
    userId: string | undefined,
    projectId: string,
): Promise<void> {
    const sanitizedUserId = sanitizeId(userId);
    const projectToUpdate = await getProjectById(projectId);

    if (sanitizedUserId !== projectToUpdate.userId) {
        throw new HttpException(
            `You are not authorized to perform this action, ${sanitizedUserId} + ${projectToUpdate._id}`,
            401,
        );
    }
}
