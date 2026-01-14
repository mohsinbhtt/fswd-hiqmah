import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import mongoose from 'mongoose';
import app from './app.js';

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.DB_URL);
		console.log('DataBase Connected ✔️');
	} catch (error) {
		console.error('Connection Failed ❌', error);
	}
};
dbConnection();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`your server is connected at port ➡️ ${PORT}`);
});
