import axios from 'axios';

axios.defaults.baseURL = '192.168.1.7:9000/api';
axios.defaults.timeout = 5000;
axios.defaults.headers.common = {
  Accept: 'application/json',
  'Content-Type': 'multipart/form-data',
};

export function setClientToken(token: string) {
  axios.defaults.headers.common = {Authorization: token};
}
export default axios;
