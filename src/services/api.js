import axios from 'axios'

const api = axios.create({
   baseURL: 'https://bethehero-backend-11.herokuapp.com'
})

export default api
