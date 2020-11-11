import axios from './axios';
import { USERS_ME_URL, USERS_URL } from '../libs/apiUrl';

export default {
  getMyInfo: () => {
    return axios.get(USERS_ME_URL);
  },
  getUsers: () => {
    return axios.get(USERS_URL);
  },
};
