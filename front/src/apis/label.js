import axios from './axios';
import { LABELS_URL } from '../libs/apiUrl';

export default {
  getLabels: () => {
    return axios.get(LABELS_URL);
  },
};
