import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
	return (
		<div className='h-screen w-full flex flex-col items-center justify-center bg-linear-to-br from-[#f6f9fc] to-[#d9e8ff]'>
			<h1 className='text-[100px] font-bold text-blue-500 leading-none'>
				404
			</h1>

			<p className='text-gray-700 text-lg mt-3'>
				Oops... The page you're looking for doesn't exist.
			</p>

			<button
				onClick={() => window.history.back()}
				className='flex items-center space-x-2 mt-6 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-medium shadow-md'>
				<ArrowLeft size={20} />
				<span>Go Back</span>
			</button>
		</div>
	);
}
