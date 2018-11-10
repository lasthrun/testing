import axios from 'axios';
import API_URL from '../constants/API_URL';
/**
 * @description HTTP request utility. powered by axios
 * @return {AxiosPromise}
 * */
export default ({
  url, method, params, timeout = 1000, headers = {},
}) => axios.request({
  baseURL: API_URL,
  headers,
  url,
  method,
  params,
  timeout,
});
