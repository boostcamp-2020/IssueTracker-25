import axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';

const instance = axios.create({
  baseURL: isProd ? '/api' : 'http://localhost:3000',
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
