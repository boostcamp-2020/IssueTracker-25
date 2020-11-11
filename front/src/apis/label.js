import axios from './axios';

export default {
  getLabels: () => {
    return axios.get(`/labels`);
  },
};
