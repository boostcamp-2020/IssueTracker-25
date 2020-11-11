import axios from './axios';

export default {
  getMilestones: () => {
    return axios.get(`/milestones`);
  },
};
