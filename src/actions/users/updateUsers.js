import ACTION_TYPES from '../../constants/ACTION_TYPES';
import { USERS } from '../../constants/REDUCER_TYPES';
/**
 * @description get post by id
 * @param {array} users - array of user data
 * */
export const updateUsers = users => ({
  type: ACTION_TYPES[USERS].updateUsers,
  users,
});
