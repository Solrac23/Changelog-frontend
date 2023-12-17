import axios from 'axios'
import { parseCookies } from 'nookies'

export function getAPIClient(ctx){
  const { 'authcookie': token} = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:3356',
  })

  api.interceptors.request.use(config => {
    return config
  })

  if(token){
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  return api
}

