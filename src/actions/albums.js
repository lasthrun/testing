import ACTION_TYPES from '../constants/ACTION_TYPES';
import { ALBUMS } from '../constants/REDUCER_TYPES';
/**
 * @description update USERS.albums reducer
 * @param {array} albums - array of user data
 * */
export const updateAlbums = albums => ({
  type: ACTION_TYPES[ALBUMS].updateAlbums,
  albums,
});
/**
 * @description update USERS.photos reducer
 * @param {array} photos - array of photos data
 * */
export const updatePhotos = photos => ({
  type: ACTION_TYPES[ALBUMS].updatePhotos,
  photos,
});
