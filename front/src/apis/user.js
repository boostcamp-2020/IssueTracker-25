import axios from './axios';

export default {
  getMyInfo: (token) => {
    return axios.get('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
