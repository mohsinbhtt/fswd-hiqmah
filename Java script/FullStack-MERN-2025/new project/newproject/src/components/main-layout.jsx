import { Home, BarChart2, Settings, User } from 'lucide-react';
import { NavLink } from 'react-router';

const links = [
	{
		label: 'Home',
		icon: <Home size={20} />,
		to: '/',
	},
	{
		label: 'Analytics',
		icon: <BarChart2 size={20} />,
		to: '/analytics',
	},
	{
		label: 'Profile',
		icon: <User size={20} />,
		to: '/profile',
	},
	{
		label: 'Settings',
		icon: <Settings size={20} />,
		to: '/settings',
	},
];
export default function MainLayout() {
	return (
		<aside className='w-64 bg-white shadow-md border-r border-gray-200 p-5 flex flex-col'>
			<h2 className='text-2xl font-bold text-gray-800 mb-8'>
				MyDashboard
			</h2>

			<nav className='space-y-4 text-gray-700'>
				{links.map((link) => {
					return (
						<NavLink
							key={link.label}
							to={link.to}
							className={({ isActive }) => {
								return isActive
									? 'flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-100 w-full text-left bg-indigo-500 text-white'
									: 'flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-100 w-full text-left';
							}}>
							{link.icon}
							{link.label}
						</NavLink>
					);
				})}
				{/* <NavLink
					to='/'
					className='flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-100 w-full text-left'>
					<Home size={20} />
					<span>Home</span>
				</NavLink>

				<NavLink
					to='/analytics'
					className='flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-100 w-full text-left'>
					<BarChart2 size={20} />
					<span>Analytics</span>
				</NavLink>

				<button className='flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-100 w-full text-left'>
					<User size={20} />
					<span>Profile</span>
				</button>

				<button className='flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-100 w-full text-left'>
					<Settings size={20} />
					<span>Settings</span>
				</button> */}
			</nav>

			<div className='mt-auto text-center text-gray-500 text-sm'>
				© 2025 YourCompany
			</div>
		</aside>
	);
	<Outlet />;
}
