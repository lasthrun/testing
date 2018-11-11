import request from '../utilities/request';
/**
 * @description get users
 * */
export const getUsers = () => request({
  url: '/users',
  method: 'get',
});
/**
 * @description get user by id
 * @param {string} id - user id
 * */
export const getUserById = id => request({
  url: `/users/${id}`,
  method: 'get',
});
