import produce from 'immer';
import { combineReducers } from 'redux';
import ACTION_TYPES from '../constants/ACTION_TYPES';
import { TODOS } from '../constants/REDUCER_TYPES';

export const todosInitialState = {};

export default combineReducers({
  todos: (
    state = todosInitialState,
    { type, todos },
  ) => produce(state, (draft) => {
    switch (type) {
      case ACTION_TYPES[TODOS].updateTodos:
        todos.forEach((todo) => {
          const { id } = todo;
          draft[id] = todo;
        });
        return draft;
      default: return draft;
    }
  }),
});
