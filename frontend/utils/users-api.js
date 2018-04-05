import axios from 'axios'
import { getAccessToken } from './auth'

const BASE_URL = 'http://192.168.50.11:8000'  // TODO: Use system variable instead?

export function getPrivateUsers () {
  var token = getAccessToken()
  const url = `${BASE_URL}/users/`
  axios.defaults.headers.common['Authorization'] = 'JWT ' + token
  return axios.get(url)
  .then(response => response.data)
}
