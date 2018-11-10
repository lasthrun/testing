import ACTION_TYPES from '../constants/ACTION_TYPES';
import { USERS } from '../constants/REDUCER_TYPES';
/**
 * @description update USERS.users reducer
 * @param {array} users - array of user data
 * */
export const updateUsers = users => ({
  type: ACTION_TYPES[USERS].updateUsers,
  users,
});
/**
 * @description update USERS.user reducer
 * @param {array} user - user data
 * */
export const updateUser = user => ({
  type: ACTION_TYPES[USERS].updateUser,
  user,
});
