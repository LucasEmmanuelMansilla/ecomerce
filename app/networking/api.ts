import axios from 'axios';
import config from '../config/config';

axios.defaults.baseURL = config.baseURL;
axios.defaults.timeout = config.timeout;
axios.defaults.headers.common = {
  Accept: 'application/json',
  'Content-Type': 'multipart/form-data',
};

export function setClientToken(token: string) {
  axios.defaults.headers.common = {Authorization: token};
}
export default axios;
