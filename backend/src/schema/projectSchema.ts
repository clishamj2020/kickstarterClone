import { Schema } from 'mongoose';
import { Category, type ProjectType } from '../types/projectTypes';

export interface IProjectSchema extends ProjectType {
    _id: string;
}

const projectSchema = new Schema<IProjectSchema>(
    {
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: Object.values(Category),
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export default projectSchema;
