import axios from './axios';

export default {
  getIssues: (page) => {
    return axios.get(`/issues?page=${page}`);
  },
  getIssue: (id) => {
    return axios.get(`/issues/${id}`);
  },
};
