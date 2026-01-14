import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { LoginForm } from '@/components/login-form';
import {
	BrowserRouter,
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { routes } from '../app/routes';

const routeList = createBrowserRouter(routes);

function App() {
	return (
		<>
			<RouterProvider router={routeList} />
		</>
	);
}

export default App;
