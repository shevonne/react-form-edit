import axios from 'axios';

const instance = axios.create({
  timeout: 10 * 1000,
});

export default instance;
