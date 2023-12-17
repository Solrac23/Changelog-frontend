import Link from 'next/link'
import Head from 'next/head'
import { HiOutlineLogin } from 'react-icons/hi'
import { useForm } from 'react-hook-form'
import styles from './styles.module.css'
import Button from '@/components/Button'
import { useAuth } from '@/hooks/useAuth'

export default function Password(){
  const { handleSubmit, register} = useForm()
  const {changePassword} = useAuth()

  async function handlePassword(data){
    await changePassword(data)
  }
  return(
    <>
     <Head>
       <title>Password</title>
       <meta name="description" content="Site para versionamento de códigos" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel="icon" href="/favicon.ico" />
     </Head>
      <div className={styles.containerPassword}>
        <form className={styles.passwordForget} onSubmit={handleSubmit(handlePassword)}>
          <div className={styles.password}>
            <label htmlFor="email">Edentifique-se:</label>
            <input
              {...register('email')}
              type="email" 
              name="email" 
              id="email" 
              placeholder="Digite seu email" 
            />
          </div>
          <div className={styles.password}>
            <label htmlFor="new_password">Nova Senha:</label>
            <input 
              {...register('new_password')}
              type="password" 
              name="new_password" 
              id="newPassword" 
              placeholder="Senha nova" 
            />
          </div>
          <div className={styles.password}>
            <label htmlFor="confirm_password">Confirme a nova senha:</label>
            <input
              {...register('confirm_password')}
              type="password" 
              name="confirm_password" 
              id="confirmPassword" 
              placeholder="Confirme sua senha"
            />
          </div>
          <div className={styles.btnEnter}>
            <Button typeBtn={'submit'} text={'Confirmar'}/>
          </div>
          <div className={styles.link}>
            <Link href='/signIn/auth/' className={styles.backButton}>
              <div className={styles.linkContent}>
                <HiOutlineLogin size={18} title='Voltar para página de Login' />
                <span>Voltar</span>
              </div>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}