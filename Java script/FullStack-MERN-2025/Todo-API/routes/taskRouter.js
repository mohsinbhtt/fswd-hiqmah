import taskController from '../Controllers/taskController.js';
import express from 'express';

const taskRouter = express.Router();

taskRouter
	.route('/')
	.get(taskController().getAllTasks)
	.post(taskController().createTasks);
taskRouter
	.route('/:id')
	.get(taskController().getTask)
	.patch(taskController().updateTask)
	.delete(taskController().deleteTask);

export default taskRouter;
