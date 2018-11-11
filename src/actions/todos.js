import ACTION_TYPES from '../constants/ACTION_TYPES';
import { TODOS } from '../constants/REDUCER_TYPES';
/**
 * @description update TODOS.todos reducer
 * @param {array} todos - array of todos data
 * */
export const updateTodos = todos => ({
  type: ACTION_TYPES[TODOS].updateTodos,
  todos,
});
