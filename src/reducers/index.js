import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import posts from './posts';
import albums from './albums';
import users from './users';
import { ALBUMS, POSTS, USERS } from '../constants/REDUCER_TYPES';

const reducers = combineReducers({
  [POSTS]: posts,
  [ALBUMS]: albums,
  [USERS]: users,
});

const middleWares = applyMiddleware(createLogger({
  diff: true,
  collapsed: true,
}));

export default createStore(reducers, middleWares);
