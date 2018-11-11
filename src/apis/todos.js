import request from '../utilities/request';
/**
 * @description get user todos list by user id
 * @param {string} userId
 * */
export const getTodosByUserId = userId => request({
  url: '/todos',
  method: 'get',
  params: { userId },
});
