import axios from './axios';
import { COMMENTS_URL } from '../libs/apiUrl';

export default {
  registerComment: (payload) => {
    return axios.post(COMMENTS_URL, payload);
  },
};
