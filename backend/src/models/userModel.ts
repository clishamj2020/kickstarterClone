import { model } from 'mongoose';
import userSchema, { type IUserSchema } from '../schema/userSchema';

const UserModel = model<IUserSchema>('User', userSchema);

export default UserModel;
