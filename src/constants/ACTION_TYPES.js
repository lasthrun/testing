import {
  ALBUMS, POSTS, TODOS, USERS,
} from './REDUCER_TYPES';

export default {
  [ALBUMS]: {
    updateAlbums: `${ALBUMS}/updateAlbums`,
    updateAlbum: `${ALBUMS}/updateAlbum`,
    updatePhotos: `${ALBUMS}/updatePhotos`,
  },
  [POSTS]: {
    updatePosts: `${POSTS}/updatePosts`,
    updateComments: `${POSTS}/updateComments`,
  },
  [USERS]: {
    updateUsers: `${USERS}/updateUsers`,
    updateUser: `${USERS}/updateUser`,
  },
  [TODOS]: {
    updateTodos: `${TODOS}/updateTodos`,
  },
};
