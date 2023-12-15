import axios from 'axios'


export const api = axios.create({
  baseURL: 'https://www.itis.gov/ITISWebService/jsonservice',
})

export const gameApi = axios.create({
  baseURL: import.meta.env.VITE_API
})