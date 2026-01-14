import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import taskRouter from './routes/taskRouter.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.set('query parser', 'extended');
app.use('/api/v1/task', taskRouter);

export default app;
// http://localhost:3000/api/v1/task/
