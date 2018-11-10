import request from '../../utilities/request';
/**
 * @description get users
 * */
export const getUsers = () => request({
  url: '/users',
  method: 'get',
});
