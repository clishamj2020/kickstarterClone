import { Schema } from 'mongoose';
import { type ProjectType } from '../types/projectTypes';

export interface IProjectSchema extends ProjectType {
    _id: string;
}

const projectSchema = new Schema<IProjectSchema>(
    {
        userId: { type: String, required: true },
        // We want our project to have unique title
        title: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    },
);

export default projectSchema;
