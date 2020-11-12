import axios from './axios';
import { FILE_UPLOAD_URL } from '../libs/apiUrl';

export default {
  uploadFile: (files) => {
    const file = files[0];
    const formData = new FormData();
    const headers = { 'content-type': 'multipart/form-data' };

    formData.append('file', file);
    return axios.post(FILE_UPLOAD_URL, formData, { headers });
  },
};
