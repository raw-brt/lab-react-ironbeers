import axios from 'axios'

const http = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/beers`
})

const list = () => http.get('/')

export default { list }