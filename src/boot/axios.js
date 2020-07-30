import axios from 'axios'

const HTTPClient = axios.create({
  baseURL: ' api/',
  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-cache', Pragma: 'no-cache' }
})

export { HTTPClient }
