import { ALBUMS, POSTS, USERS } from './REDUCER_TYPES';

export default {
  [ALBUMS]: {
    updateAlbum: `${ALBUMS}/updateAlbum`,
  },
  [POSTS]: {
    updatePosts: `${ALBUMS}/updatePosts`,
  },
  [USERS]: {
    updateUsers: `${USERS}/updateUsers`,
    updateUser: `${USERS}/updateUser`,
  },
};
