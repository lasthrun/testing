import produce from 'immer';
import ACTION_TYPES from '../constants/ACTION_TYPES';
import { POSTS } from '../constants/REDUCER_TYPES';

export const postsInitialState = [];
/**
 * @description posts reducer
 * @requires postsInitialState
 * @default postsInitialState
 * */
export default (state = postsInitialState, { type, posts }) => produce(state, (draft) => {
  switch (type) {
    case ACTION_TYPES[POSTS].updatePosts:
      posts.forEach((post) => {
        const { id, ...postData } = post;
        draft[id] = postData;
      });
      break;
    default: break;
  }
});
