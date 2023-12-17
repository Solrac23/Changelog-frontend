import { useEffect, useState, createContext } from 'react'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router'
import { api } from '@/services/api';

export const ChangelogContext = createContext({})

export function ChangelogProvider({children}){
  const [changelog, setChangelog] = useState([])
  const router = useRouter()

  useEffect(() => {
    function handleAuthenticated(){
      const { 'authcookie': token } = parseCookies()

      if(!token){
        router.push('/signIn/auth')
      }
    }
    handleAuthenticated()

  }, [router])

  useEffect(() =>{
    async function handleChangelog() {
      const { 'authcookie': token } = parseCookies()
      try {
        if(token){
          const response = await api().get('/changelog')
          const { data: changelog} = response

          setChangelog(changelog)
        }
      } catch (err) {
        console.error(err.message)
      }
    }
    handleChangelog()
  }, [])

  return (
    <ChangelogContext.Provider value={{ changelog }}>
      {children}
    </ChangelogContext.Provider>
  )
}