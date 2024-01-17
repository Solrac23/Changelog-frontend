import Head from 'next/head'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/hooks/useAuth'
import styles from '@/pages/signIn/register/styles.module.css'
import Button from '@/components/Button'

export default function Register(){
	const { register, handleSubmit, formState: {errors} } = useForm()
	const { signUp } = useAuth()

	async function handleRegister(data) {
		await signUp(data)
	}

	return(
		<>
			<Head>
				<title>Cadastro</title>
				<meta name="description" content="Site para versionamento de códigos" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.container}>
				<form onSubmit={handleSubmit(handleRegister)}>
					<fieldset className={styles.signUp}>
						<legend>Cadastro</legend>
						<div className={styles.formGroup}>
							<label htmlFor="name">Nome Completo: </label>
							<input
								{...register('name')} 
								type="text" 
								name="name" 
								id="name" 
							/>
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="email">E-mail: </label>
							<input
								{...register('email')} 
								type="email" 
								name="email" 
								id="email" 
							/>
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="password">Password: </label>
							<input
								{...register('password')} 
								type="password" 
								name="password" 
								id="password" 
							/>
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="CompanyName">Nome da Empresa: </label>
							<input
								{...register('CompanyName')}	 
								type="text" 
								name="CompanyName" 
								id="CompanyName" 
							/>
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="uf">Uf: </label>
							<input
								{...register('uf')} 
								type="text" 
								name="uf" 
								id="uf" 
							/>
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="city">Cidade: </label>
							<input
								{...register('city')} 
								type="text" 
								name="city" 
								id="city" 
							/>
						</div>
						<Button typeBtn={'submit'} text={'Salvar'} />
						<div className={styles.link}>
							<span>Já tem uma conta?</span>
							<Link href='/signIn/auth/' className={styles.backButton}> Login</Link>
						</div>
					</fieldset>
				</form>
			</main>
		</>
	)
}