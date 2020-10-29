import axios from './axios';

export default {
  getIssues: () => {
    return axios.get('/issues');
  },
};
