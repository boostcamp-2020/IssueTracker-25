import axios from './axios';

export default {
  getMyInfo: (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return axios.get('/users/me');
  },
};
