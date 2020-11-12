import axios from './axios';
import { ISSUES_URL } from '../libs/apiUrl';

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
  updateTitle: ({ title, id }) => {
    return axios.put(`${ISSUES_URL}/${id}/title`, { title });
  },
  updateContents: ({ contents, id }) => {
    return axios.put(`${ISSUES_URL}/${id}/contents`, { contents });
  },
};
