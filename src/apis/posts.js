import request from '../utilities/request';
/**
 * @description get user posts by user id
 * @param {number} userId - user id
 * */
export function getPostsByUserId(userId) {
  return request({
    url: '/posts',
    method: 'get',
    params: { userId },
  });
}
/**
 * @description get post comments by post id
 * @param {number} postId - post id
 * */
export function getCommentsByPostId(postId) {
  return request({
    url: '/comments',
    method: 'get',
    params: { postId },
  });
}
