import axios from './axios';
import { MILESTONES_URL } from '../libs/apiUrl';

export default {
  getMilestones: () => {
    return axios.get(MILESTONES_URL);
  },
};
