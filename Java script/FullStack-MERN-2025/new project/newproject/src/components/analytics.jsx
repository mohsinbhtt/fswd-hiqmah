import React from 'react';
import { Outlet } from 'react';
// Assuming you have a chart library component, e.g., using Recharts, it might look like this:
// import AnalyticsChart from './AnalyticsChart';

const StatCard = ({ title, value, icon, change }) => (
	<div className='bg-white  p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300'>
		<div className='flex items-center justify-between'>
			<div>
				<p className='text-sm font-medium text-gray-500'>{title}</p>
				<p className='text-3xl font-bold text-gray-900 mt-1'>
					{value}
				</p>
			</div>
			<div className='text-blue-500'>{icon}</div>
		</div>
		<p className='mt-3 text-sm'>
			<span
				className={`font-semibold ${
					change.includes('+') ? 'text-green-500' : 'text-red-500'
				}`}>
				{change}
			</span>{' '}
			Since last month
		</p>
	</div>
);

const AnalyticsPage = () => {
	return ();
};

export default AnalyticsPage;
