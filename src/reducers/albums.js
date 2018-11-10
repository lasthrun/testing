import produce from 'immer';
import ACTION_TYPES from '../constants/ACTION_TYPES';
import { ALBUMS } from '../constants/REDUCER_TYPES';

export const albumsInitialState = [];
/**
 * @description albums reducer
 * @requires albumsInitialState
 * @default albumsInitialState
 * */
export default (state = albumsInitialState, { type, albums }) => produce(state, (draft) => {
  switch (type) {
    case ACTION_TYPES[ALBUMS].updateAlbum:
      albums.forEach((album) => {
        const { id, ...albumData } = album;
        draft[id] = albumData;
      });
      break;
    default: break;
  }
});
