import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333', // TODO: change this to a env var
})
