import express from 'express';
import fs from 'fs';
import morgan from 'morgan';

const __dirname = import.meta.dirname;

const toursData = JSON.parse(
	fs.readFileSync(`${__dirname}/data/tours.json`)
);

const app = express();
//use middleware to attach body to request (client to server data in postman body format json)
app.use(express.json());
app.use(morgan('dev'));

// Custom own middleware
app.use((req, res, next) => {
	req.requestedAt = new Date().toISOString();
	next();
});

// app.get('/api/v1/tours');

//post when to create new resource
// app.post('/api/v1/tours', );

// Get all tours
const getAllTours = (req, res) => {
	//json format
	console.log(req.requestedAt);
	res.status(200).json({
		status: 'success',
		requestedAT: req.requestedAt,
		data: {
			tours: toursData,
		},
	});
};

const createTour = (req, res) => {
	res.status(201).json({
		status: 'success',
		data: {
			tours: toursData,
		},
	});
};

// Get single tour
const getTour = (req, res) => {
	const { id } = req.params;

	res.status(200).json({
		status: 'success',
		data: {
			id: id,
			tour: toursData[0],
		},
	});
};

const updateTour = (req, res) => {
	const { id } = req.params;

	res.status(200).json({
		status: 'success',
		data: {
			id: id,
			tour: toursData[0],
		},
	});
};

const deleteTour = (req, res) => {
	const { id } = req.params;

	res.status(204).json({
		status: 'success',
		message: `Delete user ${id}`,
	});
};

app.route('/api/v1/tours').get(getAllTours).post(createTour);

app
	.route('/api/v1/tours/:id')
	.get(getTour)
	.patch(updateTour)
	.delete(deleteTour);

app.route('api/v1/users');
app.listen(5000, () => {
	console.log('server running on port 5000');
});
// patch -update that only that is required
//put-update the whole object
