import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const configCopy = config;
  if (token) configCopy.headers.common.Authorization = `Bearer ${token}`;
  return configCopy;
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default instance;
