import { TiWeatherWindyCloudy } from 'react-icons/ti';
import { WiHumidity } from 'react-icons/wi';
import { FcNightLandscape } from 'react-icons/fc';
import { WiSunrise } from 'react-icons/wi';
export default function Dashboard({ weather }) {
	return (
		<>
			<div className='info-container flex flex-col justify-between items-start p-2.5 min-w-1/2 bg-transparent backdrop-blur-xl border-2 shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-2xl'>
				<div className='name-updatedTime w-full'>
					<p className='text-4xl font-semibold'>
						{weather?.location?.name},{weather?.location?.country}
					</p>
					<p className='text-[0.8rem] mt-1 text-black/50'>
						UPDATED: {weather?.current?.last_updated}
					</p>
				</div>

				<div className='isDay-temperature flex w-full items-center'>
					<div className='isDay flex flex-col relative left-[27%] text-4xl '>
						{weather?.current?.is_day === 0 ? (
							<>
								<FcNightLandscape />
								<p className='text-2xl font-bold'>Night</p>
							</>
						) : (
							<>
								<WiSunrise />
								<p className='text-2xl font-bold'>Day</p>
							</>
						)}
					</div>
					<div className='temperature relative left-[34%] flex flex-col items-center gap-1 self-center border-4 border-black rounded-full  p-5 text-5xl text-white font-bold'>
						{weather?.current?.temp_c} °C
						<div className='text-white/50 text-[16px] font-serif'>
							Feels Like: {weather?.current?.feelslike_c} °C
						</div>
					</div>
				</div>

				<div className='condition-wind-humidity flex gap-2.5 items-center justify-around w-full mb-4 mt-6'>
					<div className='condition-icon flex flex-col items-center justify-center p-2 h-40 w-[8em] bg-linear-to-br from-purple-700/60 via-purple-900/60 to-black text-white font-bold border-4 border-white rounded-4xl text-center'>
						{weather?.current?.condition?.icon && (
							<img
								src={`https:${weather.current.condition.icon}`}
								alt={weather.current.condition.text}
							/>
						)}
					</div>
					<div className='wind flex flex-col items-center justify-center p-2 h-40 w-[8em] bg-linear-to-br from-purple-700/60 via-purple-900/60 to-black text-white font-bold border-4 border-white rounded-4xl text-center'>
						<p>Wind Speed</p>
						<div className=' text-7xl'>
							<TiWeatherWindyCloudy />
						</div>
						{weather?.current?.gust_kph}
					</div>
					<div className='humidity flex flex-col items-center justify-center p-2 h-40 w-[8em] bg-linear-to-br from-purple-700/60 via-purple-900/60 to-black text-white font-bold border-4 border-white rounded-4xl text-center'>
						<p>Humidity</p>
						<div className=' text-7xl'>
							<WiHumidity />
						</div>

						{weather?.current?.humidity}
					</div>
				</div>
			</div>
		</>
	);
}
