import axios from 'axios'

const http = axios.create({
  baseURL:  'http://192.168.0.97:5000/'
})

export default http