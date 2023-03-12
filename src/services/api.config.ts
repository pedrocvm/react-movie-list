import axios, { AxiosInstance } from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 15 * 60 * 1000
});

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'en-US'
  },
  adapter: cache.adapter
});

export default api;
