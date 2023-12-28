import { model } from 'mongoose';
import projectSchema, { type IProjectSchema } from '../schema/projectSchema';

const ProjectModel = model<IProjectSchema>('Project', projectSchema);

export default ProjectModel;
