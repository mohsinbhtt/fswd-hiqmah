import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export function LoginForm({ className, ...props }) {
	return (
		<div
			className={cn(
				'flex flex-col  relative top-36 justify-self-center',
				className
			)}
			{...props}>
			<Card className='w-lg gap-2.5 flex flex-col'>
				<CardHeader>
					<CardTitle className=' self-center justify-self-center text-3xl'>
						SignUP
					</CardTitle>
					<CardDescription className='justify-self-center font-serif [word-spacing:6px]'>
						WELCOME TO TOURPRESS
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor='email'>Email</FieldLabel>
								<Input
									id='email'
									type='email'
									placeholder='m@example.com'
									name='email'
									required
								/>
							</Field>
							<Field>
								<div className='flex items-center'>
									<FieldLabel htmlFor='password'>Password</FieldLabel>
									<a
										href='#'
										className='ml-auto inline-block text-red-500 text-sm underline-offset-4 hover:underline'>
										Forgot your password?
									</a>
								</div>
								<Input
									id='password'
									type='password'
									name='password'
									required
								/>
							</Field>
							<Field>
								<div className='flex items-center'>
									<FieldLabel htmlFor='confirm-password'>
										Confirm Password
									</FieldLabel>
									<a
										href='#'
										className='ml-auto inline-block text-red-500 text-sm underline-offset-4 hover:underline'>
										Forgot your password?
									</a>
								</div>
								<Input
									id='confirm-password'
									name='confirmPassword'
									type='password'
									required
								/>
							</Field>
							<Field>
								<Button
									type='submit'
									className='bg-blue-500'
									variant='hoverEffect'>
									Sign Up
								</Button>

								<FieldDescription className='text-center'>
									Have an account? <a href='#'>Log In</a>
								</FieldDescription>
							</Field>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
