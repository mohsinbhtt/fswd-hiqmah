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
import { Spinner } from '@/components/ui/spinner';

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
						Login Here
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
									name='email'
									placeholder='m@example.com'
									required
								/>
							</Field>
							<Field>
								<div className='flex items-center'>
									<FieldLabel htmlFor='password'>Password</FieldLabel>
									<link
										to='/forget-password'
										className='ml-auto inline-block text-red-500 text-sm underline-offset-4 hover:underline'>
										Forgot your password?
									</link>
								</div>
								<Input id='password' type='password' required />
							</Field>
							<Field>
								<Button
									type='submit'
									className='bg-blue-500'
									variant='hoverEffect'
									disabled={isPending}>
									{isPending ? <Spinner /> : 'Login'}
								</Button>

								<FieldDescription className='text-center'>
									Don&apos;t have an account? <a href='#'>Sign up</a>
								</FieldDescription>
							</Field>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
