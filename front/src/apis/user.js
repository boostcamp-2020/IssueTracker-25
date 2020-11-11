import axios from './axios';

export default {
  getMyInfo: () => {
    return axios.get('/users/me');
  },
  getUsers: () => {
    return axios.get('/users');
  },
};
