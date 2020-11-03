import axios from './axios';

export default {
  getToken: (code) => {
    return axios.post('/oauth/token', { code });
  },
};
