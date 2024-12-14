import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const httpRequest = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: import.meta.env.VITE_API_KEY,
    units: 'metric',
  },
  headers: {
    'Content-Type': 'application/json',
  },
})

axios.interceptors.request.use(
  config => config,
  err => Promise.reject(err)
)

axios.interceptors.response.use(
  res => res.data.data,
  err => Promise.reject(err)
)
