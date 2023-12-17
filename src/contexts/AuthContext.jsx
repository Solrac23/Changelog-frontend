import { createContext, useEffect, useState } from 'react'
import {setCookie, parseCookies} from 'nookies'
import Router from 'next/router'
import {api} from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({children}) {
  const [user, setUser] = useState({})
 
  const isAuthenticated = !!user

  useEffect(() => {
    const {'authcookie': token} = parseCookies()
    
    async function handleUser(token) {
      if(token){
        try {
          const response = await api().get('/profile')
          const {data: user} = response
          
          setUser(user)
        } catch (err) {
          console.error(err.message)
        }
      }
    }

    handleUser(token)
  }, [])

  async function signIn({email, password}){
    try {
      const response = await api().post('/auth/login/', {
        email,
        password
      })

      const { token, user } = response.data

      setCookie(undefined, 'authcookie', token, {
        maxAge: 60 * 60 * 24, // 1 dia expiração
        sameSite: 'strict',
        secure: false
      })

      setCookie(undefined, 'authcookie.role', user.role, {
        maxAge: 60 * 60 * 24, // 1 dia expiração
        sameSite: 'lax',
        secure: false
      })

      api().defaults.headers['Authorization'] = `Bearer ${token}`

      setUser(user)
      
      Router.push('/changelog')
    } catch (err) {
      console.error(err.message)
    }
  }

  async function changePassword({email, new_password, confirm_password}){
    try {
      await api().put('/forgetpassword', {
        email,
        new_password,
        confirm_password
      })

      Router.push('/signIn/auth')
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <AuthContext.Provider value={{user, isAuthenticated, signIn, changePassword}}>
      {children}
    </AuthContext.Provider>
  )
}