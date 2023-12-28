import express from 'express';
import { connectDB } from './database/db';
import { PORT } from './utils/config';
import { errorHandler } from './middleware/errorMiddleware';
import * as Colors from 'colors.ts';
import projectRoutes from './routes/projectRoutes';
import userRoutes from './routes/userRoutes';

Colors.colors('', ''); // Some default we need for Colors import to work.
// First arg is a color string second is just a string.
// If you don't have this called once... it will fail.

// Export because we never read db
export const db = async (): Promise<void> => {
    await connectDB();
};

void db();

const app = express();
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`.blue);
});
