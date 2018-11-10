import ACTION_TYPES from '../../constants/ACTION_TYPES';
import { USERS } from '../../constants/REDUCER_TYPES';
/**
 * @description unselect user
 * */
export const unSelectUser = () => ({
  type: ACTION_TYPES[USERS].unSelectUser,
});
