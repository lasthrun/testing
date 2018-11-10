import produce from 'immer';
import ACTION_TYPES from '../constants/ACTION_TYPES';
import { USERS } from '../constants/REDUCER_TYPES';

export const usersInitialState = {
  selectedUserId: NaN,
  length: 0,
  native: [],
};
/**
 * @description user reducer
 * @requires usersInitialState
 * @default usersInitialState
 * */
export default (state = usersInitialState, { type, users, userId }) => produce(state, (draft) => {
  switch (type) {
    case ACTION_TYPES[USERS].updateUsers:
      draft.native = users;
      draft.length = users.length;
      users.forEach((user) => {
        const { id, ...userData } = user;
        draft[id] = userData;
      });
      break;
    case ACTION_TYPES[USERS].selectUser:
      draft.selectedUserId = userId;
      break;
    case ACTION_TYPES[USERS].unSelectUser:
      draft.selectedUserId = NaN;
      break;
    default: break;
  }
});
