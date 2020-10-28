import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
