import produce from 'immer';
import { combineReducers } from 'redux';
import ACTION_TYPES from '../constants/ACTION_TYPES';
import { ALBUMS } from '../constants/REDUCER_TYPES';
// =============================================================================
// initial states
// =============================================================================
export const albumsInitialState = {};
export const photosInitialState = {};
// =============================================================================
// reducers
// =============================================================================
export default combineReducers({
  albums: (
    state = albumsInitialState,
    { type, albums },
  ) => produce(state, (draft) => {
    switch (type) {
      case ACTION_TYPES[ALBUMS].updateAlbums:
        albums.forEach((album) => {
          const { id } = album;
          draft[id] = album;
        });
        return draft;
      default: return draft;
    }
  }),
  photos: (
    state = photosInitialState,
    { type, photos },
  ) => produce(state, (draft) => {
    switch (type) {
      case ACTION_TYPES[ALBUMS].updatePhotos:
        photos.forEach((photo) => {
          const { id } = photo;
          draft[id] = photo;
        });
        return draft;
      default: return draft;
    }
  }),
});
