import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
	{
		// serial number depends upon array.length
		serialNumber: {
			type: Number,
			required: true,
			unique: true,
		},
		taskName: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
const Task = mongoose.model('Task', todoSchema);
export default Task;
