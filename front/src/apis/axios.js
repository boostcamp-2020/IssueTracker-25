import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
});

instance.interceptors.response.use(
  (response) => {
    if (response.data.token) {
      instance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    }
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
