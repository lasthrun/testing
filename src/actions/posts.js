import ACTION_TYPES from '../constants/ACTION_TYPES';
import { POSTS } from '../constants/REDUCER_TYPES';
/**
 * @description update POSTS.posts reducer
 * @param {array} posts - array of post data
 * */
export const updatePosts = posts => ({
  type: ACTION_TYPES[POSTS].updatePosts,
  posts,
});
/**
 * @description update POSTS.comments reducer
 * @param {array} comments - array of comment data
 * */
export const updateComments = comments => ({
  type: ACTION_TYPES[POSTS].updateComments,
  comments,
});
