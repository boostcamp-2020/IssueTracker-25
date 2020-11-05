import axios from './axios';

export default {
  getIssues: () => {
    return axios.get('/issues');
  },
  getIssue: (id) => {
    return axios.get(`/issues/${id}`);
  },
};
