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
    selectUser: `${USERS}/selectUser`,
    unSelectUser: `${USERS}/unSelectUser`,
  },
};
