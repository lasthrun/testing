import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import posts from './posts';
import albums from './albums';
import users from './users';
import todos from './todos';
import {
  ALBUMS, POSTS, TODOS, USERS,
} from '../constants/REDUCER_TYPES';

const reducers = combineReducers({
  [POSTS]: posts,
  [ALBUMS]: albums,
  [USERS]: users,
  [TODOS]: todos,
});

const middleWares = applyMiddleware(createLogger({
  diff: true,
  collapsed: true,
}));

export default createStore(reducers, middleWares);
