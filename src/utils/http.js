import axios from 'axios';
import { getService } from '../services/index.js';
import { baseUrl } from './config.js';
import { toast } from 'react-hot-toast';

// Add a request interceptor
export const http = axios.create({
  baseURL: baseUrl,
});

http.interceptors.request.use(
  (config) => {
    const token = getService();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return error;
  },
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response?.status === 401) {
      // Handle 401 Unauthorized response, e.g., redirect to login
      // You can also clear tokens or perform other necessary actions
      console.log('Unauthorized request');
    }
    toast.error(error?.response?.data?.message||"Something went wrong !");
    return error;
  },
);
