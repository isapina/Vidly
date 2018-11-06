import axios from 'axios';
import { toast } from 'react-toastify';
import logger from './logService';
import { apiUrl } from '../config.json';

const instance = axios.create({
  baseURL: apiUrl,
  headers: { 'Access-Control-Allow-Origin': '*' }
});

instance.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    logger.log(error)
    toast.error('An unexpected error occured');
  }

  return Promise.reject(error);
})

export default instance;