import Head from 'next/head'
import styles from '@/pages/signIn/register/styles.module.css'

export default function Register(){
	return(
		<>
			<Head>
				<title>Cadastro</title>
				<meta name="description" content="Site para versionamento de códigos" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container">
				<article>
					<form action="">
						<fieldset>
							<legend>Cadastro</legend>
							
						</fieldset>
					</form>
				</article>
			</main>
		</>
	)
}