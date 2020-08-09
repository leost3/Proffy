import axios from 'axios'

const url = 'http://localhost:3333'

const api = axios.create({
  baseURL: url,
  headers: {
    'Content-type': 'application/json',
  }
})

export default api