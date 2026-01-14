import Task from '../Models/TaskModel.js';

export default function taskController() {
	return {
		getAllTasks: async (req, res) => {
			try {
				const queryObj = { ...req.query }; // 1. create a shallow copy
				const excludeFields = ['page', 'sort', 'limit', 'fields'];
				excludeFields.forEach((el) => delete queryObj[el]); //Excluded things that are not doc fields
				const queryStr = JSON.stringify(queryObj); // 2. convert to string
				const modifiedStr = queryStr.replace(
					/\b(gt|gte|lt|lte)\b/g,
					(match) => `${match}`
				); // here we added $ gte,kte,gt,lt
				let query = Task.find(JSON.parse(queryStr));
				if (req.query.sort) {
					const sortBy = req.query.sort.split(',').join(' ');
					query = query.sort(sortBy);
				} else query = query.sort('-createdAt');

				if (req.query.fields) {
					const limitFields = req.query.fields.split(',').join(' ');
					query = query.select(limitFields);
				} else {
					query = query.select('');
				}

				const page = Number(req.query.page) || 1;
				const limit = Number(req.query.limit) || 10;
				const skip = (page - 1) * limit;
				query = query.skip(skip).limit(limit);

				const tasks = await query;
				const total = await Task.countDocuments();
				res.status(200).json({
					status: 'success',
					results: tasks.length,
					total,
					data: { tasks },
				});
			} catch (error) {
				res.status(400).json({
					status: 'fail',
					message: error.message,
				});
			}
		},
		createTasks: async (req, res) => {
			try {
				const { serialNumber, taskName, Time } = req.body;
				const newTask = await Task.create({
					serialNumber,
					taskName,
					Time,
				});
				res.status(201).json({
					status: 'success',
					data: { task: newTask },
				});
			} catch (error) {
				res.status(400).json({
					status: 'fail',
					message: error.message,
				});
			}
		},
		getTask: async (req, res) => {
			try {
				const id = req.params.id;
				const task = await Task.findById(id);
				if (!task) {
					res.status(404).json({
						status: 'fail',
						message: 'Not Found ',
					});
				}
				res.status(200).json({
					status: 'success',
					data: task,
				});
			} catch (error) {
				res.status(400).json({
					status: 'fail',
					message: error.message,
				});
			}
		},

		updateTask: async (req, res) => {
			try {
				const id = req.params.id;
				const { name } = req.body;
				if (!name) {
					return res.status(400).json({
						status: 'fail',
						message: 'require a name',
					});
				}
				const task = await Task.findByIdAndUpdate(
					id,
					{ name },
					{ new: true }
				);
				res.status(200).json({
					status: 'success',
					data: task,
				});
			} catch (error) {
				res.status(400).json({
					status: 'fail',
					message: error,
				});
			}
		},
		deleteTask: async (req, res) => {
			console.log(req.params.id);
			try {
				const id = req.params.id;

				const task = await Task.findByIdAndDelete(id);
				console.log('task', task);

				if (!task) {
					res.status(404).json({
						status: 'fail',
						message: `Task with the id: ${id} not found`,
					});
				}
				res.status(204).json({
					status: 'success',
					data: task,
				});
			} catch (error) {
				res.status(400).json({
					status: 'fail',
					message: error,
				});
			}
		},
	};
}
