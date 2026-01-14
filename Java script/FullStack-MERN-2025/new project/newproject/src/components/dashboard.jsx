import {
	Home,
	BarChart2,
	Settings,
	User,
	Search,
} from 'lucide-react';

export default function Dashboard() {
	return (
		<main className='flex-1 p-8 overflow-y-auto'>
			{/* Header */}
			<div className='flex justify-between items-center mb-8'>
				<h1 className='text-3xl font-semibold text-gray-800'>
					Dashboard
				</h1>

				<div className='flex items-center space-x-4'>
					<div className='relative'>
						<Search
							size={18}
							className='absolute left-3 top-2.5 text-gray-500'
						/>
						<input
							type='text'
							placeholder='Search...'
							className='pl-10 pr-4 py-2 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none'
						/>
					</div>

					<User size={36} className='text-gray-600 cursor-pointer' />
				</div>
			</div>

			{/* Cards */}
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
				<div className='p-6 bg-white rounded-xl shadow'>
					<h3 className='text-lg font-semibold mb-2'>Users</h3>
					<p className='text-3xl font-bold text-blue-600'>2,430</p>
				</div>

				<div className='p-6 bg-white rounded-xl shadow'>
					<h3 className='text-lg font-semibold mb-2'>Sales</h3>
					<p className='text-3xl font-bold text-green-600'>$12,900</p>
				</div>

				<div className='p-6 bg-white rounded-xl shadow'>
					<h3 className='text-lg font-semibold mb-2'>
						Active Sessions
					</h3>
					<p className='text-3xl font-bold text-purple-600'>342</p>
				</div>
			</div>

			{/* Large Panel */}
			<div className='mt-10 p-6 bg-white rounded-xl shadow'>
				<h3 className='text-xl font-semibold mb-4'>
					Recent Activity
				</h3>
				<ul className='space-y-3 text-gray-700'>
					<li>• User JohnDoe signed in</li>
					<li>• New order #23451 has been created</li>
					<li>• Server restarted successfully</li>
					<li>• Profile updated by SarahK</li>
				</ul>
			</div>
		</main>
	);
}
