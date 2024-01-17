import styles from './styles.module.css'
import Link from 'next/link'
import Head from 'next/head'
import {useForm} from 'react-hook-form'
import Button from '../../../components/Button'
import { useAuth } from '@/hooks/useAuth'

export default function Auth() {
	const { register, handleSubmit, formState: {errors}} = useForm()
	const { signIn } = useAuth()

	async function handleLogin(data){
		await signIn(data)
	}
	return (
		<>
			<Head>
				<title>SignIn</title>
				<meta name="description" content="Site para versionamento de códigos" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.container}>
				<div className={styles.login}>
					<h1>Login</h1>
					<hr style={{ width: '45%', margin: '40px 0',}} />
					<form onSubmit={handleSubmit(handleLogin)}>
						<div className={styles.formGroup}>
							<label htmlFor="email">E-mail:</label>
							<input 
								{...register('email')}
								type="email" 
								name='email' 
								required
								id='email' 
								autoComplete='email' 
								placeholder='Digite seu e-mail'
							/>
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="password">Password:</label>
							<input 
								{...register('password')}
								type="password" 
								name='password' 
								id='password' 
								autoComplete='current-password'
								placeholder='*********' 
							/>
							{errors.password && <span>{errors.password.message}</span> }
						</div>
						<div className="pass-forget">
							<Link href='/password' title='Esqueceu a senha?'>Esqueceu a senha?</Link>
						</div>
						<div className={styles.btnEnter}>
							<Button typeBtn={'submit'} text={'Entrar'}/>
						</div>
						<div className={styles.register}>
							<Link href="/signIn/register" title='Cadastrar'>Não tem conta?</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
