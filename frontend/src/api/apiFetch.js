import axios from 'axios'
import { baseURL } from './environment'

const apiFetch = axios.create({ baseURL })

export default apiFetch;