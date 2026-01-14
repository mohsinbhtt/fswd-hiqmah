import { lazy, Suspense } from 'react';
const Login = lazy(() => import('../src/components/login-form'));
const SignUp = lazy(() => import('../src/components/signup-form'));
const ForgotPassword = lazy(() =>
	import('../src/components/forgotpassword-form')
);
import { Spinner } from '@/components/ui/spinner';

export const routes = [
	{
		path: '/login',
		element: (
			<Suspense fallback={<Spinner />}>
				<Login />
			</Suspense>
		),
	},
	{
		path: '/sign-up',
		element: (
			<Suspense fallback={<Spinner />}>
				<SignUp />
			</Suspense>
		),
	},
	{
		path: '/forget-password',
		element: (
			<Suspense fallback={<Spinner />}>
				<ForgotPassword />
			</Suspense>
		),
	},
];
