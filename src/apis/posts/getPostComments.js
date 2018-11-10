import request from '../../utilities/request';
/**
 * @description get comments of post
 * @param {number} id - post id
 * */
export function getPostComments(id) {
  return request({
    url: `/posts/${id}/comments`,
    method: 'get',
  });
}
