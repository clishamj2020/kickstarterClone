import { Category, type ProjectType } from '../types/projectTypes';
import HttpException from '../utils/httpException';
import { sanitizeId } from './userSanitizer';

export function sanitizeProject(
    project: ProjectType,
    userId: string | undefined,
): ProjectType {
    const sanitizedProject: ProjectType = {
        userId: sanitizeId(userId),
        title: sanitizeTitle(project.title),
        description: sanitizeDescription(project.description),
        category: sanitizeCategory(project.category),
        imagePath: sanitizeImagePath(project.imagePath),
    };
    // add other properties here if needed
    return sanitizedProject;
}

function sanitizeTitle(title: string): string {
    if (title === undefined) {
        throw new HttpException('Title is undefined', 400);
    }
    if (typeof title !== 'string') {
        throw new HttpException('Title is not a string', 400);
    }

    // Attributes
    title = title.trim();
    if (title.length < 3) {
        throw new HttpException('Title must be at least three characters', 400);
    }
    if (title.length > 50) {
        throw new HttpException('Title must be less than 50 characters', 400);
    }
    return title;
}

function sanitizeDescription(desc: string): string {
    if (desc === undefined) {
        throw new HttpException('Description is undefined', 400);
    }
    if (typeof desc !== 'string') {
        throw new HttpException('Description is not a string', 400);
    }

    // Attributes
    desc = desc.trim();
    if (desc.length < 3) {
        throw new HttpException(
            'Description must be at least three characters',
            400,
        );
    }
    if (desc.length > 200) {
        throw new HttpException(
            'Description must be less than 50 characters',
            400,
        );
    }
    return desc;
}

function sanitizeCategory(cat: Category): Category {
    if (cat === undefined) {
        throw new HttpException('Category is undefined', 400);
    }
    if (!(cat in Category)) {
        throw new HttpException('Category is not a valid category', 400);
    }
    return cat;
}

function sanitizeImagePath(path: string): string {
    if (path === undefined) {
        throw new HttpException('Path is undefined', 400);
    }
    if (typeof path !== 'string') {
        throw new HttpException('Path is not a string', 400);
    }
    return path;
}
