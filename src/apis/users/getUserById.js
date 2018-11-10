import request from '../../utilities/request';
/**
 * @description get users
 * */
export const getUserById = id => request({
  url: `/users/${id}`,
  method: 'get',
});
