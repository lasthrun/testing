import request from '../utilities/request';
/**
 * @description get posts of user
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
 * @description get comments of post
 * @param {number} postId - post id
 * */
export function getCommentsByPostId(postId) {
  return request({
    url: '/comments',
    method: 'get',
    params: { postId },
  });
}
