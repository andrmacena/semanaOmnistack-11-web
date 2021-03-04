import axios from 'axios'

const api = axios.create({
   baseURL: 'https://besupportive.azurewebsites.net'
})

export default api
