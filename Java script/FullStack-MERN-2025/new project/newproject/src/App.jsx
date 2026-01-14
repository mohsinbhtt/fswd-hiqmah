import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import './App.css';
import LoginPage from './components/login';
import Dashboard from './components/dashboard';
import NotFound from './components/not-found';

function App() {
	const Dashboard = lazy(() => import('./components/dashboard'));
	return (
		<>
			{/* <Routes>
				<Route path='login' element={<LoginPage />} />
				<Route
					path='dashboard'
					element={
						<Suspense fallback={<div>loading...</div>}>
							<Dashboard />
						</Suspense>
					}
				/>
				<Route path='login' element={<NotFound />} />
			</Routes> */}
		</>
	);
}

export default App;
