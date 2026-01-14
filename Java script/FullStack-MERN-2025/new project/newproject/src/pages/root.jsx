import { Outlet } from 'react-router';
import MainLayout from '../components/main-layout';

export default function Root() {
	return (
		<>
			<div className='h-screen w-full flex bg-[#f5f8ff]'>
				<MainLayout />
				<Outlet />
			</div>
		</>
	);
}
