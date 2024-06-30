import axios from 'axios';
import { message } from 'antd';

const instance = axios.create({
  timeout: 10 * 1000,
});

//response拦截器 统一处理errno和msg
instance.interceptors.response.use((res) => {
  const resData = (res.data || {}) as ResType;
  const { errno, data, msg } = resData;
  if (errno !== 0) {
    if (msg) {
      message.error(msg);
    }
    throw new Error(msg);
  }
  return data as any;
});

export default instance;

export type ResType = {
  errno: number;
  data?: ResDataType;
  msg: string;
};

export type ResDataType = {
  [key: string]: any;
};
