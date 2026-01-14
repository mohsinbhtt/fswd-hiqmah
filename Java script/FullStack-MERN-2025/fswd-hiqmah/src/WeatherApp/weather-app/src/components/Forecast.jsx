import { useEffect, useState } from 'react';
import HeadBodyGrid from './HomepageSkeleton';

export default function Forecast() {
	const [forecast, setForecast] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchForecast() {
			try {
				setLoading(true);
				setError(null);

				const res = await fetch(
					`https://api.weatherapi.com/v1/forecast.json?key=a71f083e8a1b4be0a82162216260801&q=Mumbai&days=3&aqi=no&alerts=no
                    `
				);

				if (!res.ok) {
					throw new Error('Unable to fetch forecast data');
				}

				const data = await res.json();
				setForecast(data);
			} catch (err) {
				console.error('Forecast fetch error:', err.message);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}

		fetchForecast();
	}, []);

	if (loading || !forecast) {
		return <HeadBodyGrid />;
	}

	if (error) {
		return <p className='text-red-500 font-semibold'>{error}</p>;
	}

	return (
		<div className='flex flex-col gap-4 p-4 bg-black/40 backdrop-blur-xl rounded-2xl text-white w-full max-w-3xl'>
			<h2 className='text-3xl font-bold text-center'>
				Forecast for {forecast.location.name}
			</h2>

			{forecast.forecast.forecastday.map((day) => (
				<div
					key={day.date}
					className='flex items-center justify-between bg-purple-900/40 p-4 rounded-xl'>
					<div>
						<p className='text-lg font-semibold'>{day.date}</p>
						<p className='text-sm text-white/70'>
							{day.day.condition.text}
						</p>
					</div>

					<div className='flex items-center gap-4'>
						<img
							src={`https:${day.day.condition.icon}`}
							alt={day.day.condition.text}
						/>
						<div className='text-right'>
							<p>Max: {day.day.maxtemp_c}°C</p>
							<p>Min: {day.day.mintemp_c}°C</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
