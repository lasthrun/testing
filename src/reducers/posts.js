import produce from 'immer';
import { combineReducers } from 'redux';
import ACTION_TYPES from '../constants/ACTION_TYPES';
import { POSTS } from '../constants/REDUCER_TYPES';
// =============================================================================
// initial states
// =============================================================================
export const postsInitialState = {};
export const commentsInitialState = {};
// =============================================================================
// reducers
// =============================================================================
export default combineReducers({
  posts: (
    state = postsInitialState,
    { type, posts },
  ) => produce(state, (draft) => {
    switch (type) {
      case ACTION_TYPES[POSTS].updatePosts:
        posts.forEach((post) => {
          const { id } = post;
          draft[id] = post;
        });
        return draft;
      default: return draft;
    }
  }),
  comments: (
    state = commentsInitialState,
    { type, comments },
  ) => produce(state, (draft) => {
    switch (type) {
      case ACTION_TYPES[POSTS].updateComments:
        comments.forEach((comment) => {
          const { id } = comment;
          draft[id] = comment;
        });
        return draft;
      default: return draft;
    }
  }),
});
