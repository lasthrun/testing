import request from '../../utilities/request';
/**
 * @description get post by id
 * @param {number} id - post id
 * */
export function getPostById(id) {
  return request({
    url: `/posts/${id}`,
    method: 'get',
  });
}
