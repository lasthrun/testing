import request from '../../utilities/request';
/**
 * @description get posts
 * */
export function getPosts() {
  return request({
    url: '/posts',
    method: 'get',
  });
}
