import axios from 'axios'

export const gameApi = axios.create({
  baseURL: import.meta.env.VITE_API
})