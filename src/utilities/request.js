import axios from 'axios';
import API_URL from '../constants/API_URL';
/**
 * @description HTTP request utility. powered by axios
 * @param {string} url - url without domain
 * @param {string} method - HTTP method type
 * @param {object} params - request params
 * @param {number} [timeout=1000]
 * @param {object} headers
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
