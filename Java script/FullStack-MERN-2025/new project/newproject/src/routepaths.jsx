import LoginPage from './components/login';
import NotFound from './components/not-found';
import Dashboard from './components/dashboard';
import AnalyticsPage from './components/analytics';
import Root from './pages/root';

export const routes = [
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: 'dashboard',
				element: <Dashboard />,
			},
			{
				path: 'analytics',
				element: <AnalyticsPage />,
				Children: [
					{
						path: '',
						element: <h1></h1>,
					},
				],
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
];
