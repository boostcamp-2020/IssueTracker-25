import axios from './axios';
import { OAUTH_TOKEN_URL } from '../libs/apiUrl';

export default {
  getToken: (code) => {
    return axios.post(OAUTH_TOKEN_URL, { code });
  },
};
