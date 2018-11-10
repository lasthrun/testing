import produce from 'immer';
import { combineReducers } from 'redux';
import ACTION_TYPES from '../constants/ACTION_TYPES';
import { USERS } from '../constants/REDUCER_TYPES';

export const usersInitialState = {};

export default combineReducers({
  users: (
    state = usersInitialState,
    { type, users },
  ) => produce(state, (draft) => {
    switch (type) {
      case ACTION_TYPES[USERS].updateUsers:
        users.forEach((user) => {
          const { id } = user;
          draft[id] = user;
        });
        return draft;
      default: return draft;
    }
  }),
  user: (
    state = usersInitialState,
    { type, user },
  ) => produce(state, (draft) => {
    switch (type) {
      case ACTION_TYPES[USERS].updateUser:
        draft = user;
        return draft;
      default: return draft;
    }
  }),
});
