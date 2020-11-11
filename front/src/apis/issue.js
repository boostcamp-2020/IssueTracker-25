import axios from './axios';

const ISSUES_URL = '/issues';
export default {
  getIssues: (page) => {
    return axios.get(`${ISSUES_URL}?page=${page}`);
  },
  getIssue: (id) => {
    return axios.get(`${ISSUES_URL}/${id}`);
  },
  postIssue: ({ issue }) => {
    return axios.post(`${ISSUES_URL}`, issue);
  },
};
