import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
	BrowserRouter,
	createBrowserRouter,
	RouterProvider,
} from 'react-router';

import './index.css';
import App from './App.jsx';
import { routes } from './routepaths.jsx';

const paths = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={paths} />
		{/* <App /> */}
	</StrictMode>
);
