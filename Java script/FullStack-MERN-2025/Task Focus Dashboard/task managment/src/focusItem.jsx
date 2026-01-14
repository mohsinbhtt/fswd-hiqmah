import { use } from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

export default function FocusItem({ item, addItemsFinished }) {
	const [clockTime, setClockTime] = useState(0);
	const [stopTimer, setStopTimer] = useState(false);

	// FIXME: Timer should start from Zero 0, on reaching 90secs (900000ms) it should stop and should show take a break,
	// This take a break should get displayed for 10secs (10000ms), .....this makes a  total of 100 secs and after completion of 100secs
	// the process should get repeated but the timer should again start from 90 secs not from Zero 0

	useEffect(() => {
		if (!stopTimer) {
			setInterval(() => {
				const clockTicker = setInterval(() => {
					setClockTime((prev) => prev + 1);
				}, 1000);

				setTimeout(() => {
					clearInterval(clockTicker);
					const BreakTime = setInterval(() => {
						setClockTime('Take a Break');
					}, 1000);
					setTimeout(() => {
						clearInterval(BreakTime);
					}, 100000);
				}, 90000);
			}, 100000);
		}
	}, [stopTimer]);

	function stopClock() {
		// setClockTime((prev=> prev ))
		setStopTimer(true);
	}

	return (
		<li
			key={item.id}
			className='bg-gray-200 text-black p-2 mb-1 rounded-lg w-full flex items-center gap-2 overflow-hidden'>
			<div className='flex-1 wrap-break-word'>{item.text}</div>

			<div className='flex flex-col font-bold text-[10px] w-16 text-center shrink-0'>
				{item.currentDateTime}
			</div>

			<div className='flex items-center gap-2 shrink-0'>
				<div className='flex justify-center items-center font-semibold border-2 rounded-full bg-amber-200 text-black px-2 py-1 text-xs'>
					{clockTime}
				</div>

				{clockTime > 90 || typeof clockTime !== 'number' ? null : (
					<button
						className={`${
							stopTimer ? 'bg-green-500' : 'bg-red-500'
						} rounded-3xl px-3 py-1 h-10 text-white text-xs hover:scale-105 transition-all`}
						onClick={() => {
							setStopTimer((prev) => !prev);
						}}>
						{stopTimer ? 'Start' : 'Stop'}
					</button>
				)}

				<button
					className='bg-green-500 rounded-3xl px-3 py-1 h-10 text-white text-xs hover:scale-105'
					onClick={() => addItemsFinished(item)}>
					Finished
				</button>
			</div>
		</li>
	);
}
