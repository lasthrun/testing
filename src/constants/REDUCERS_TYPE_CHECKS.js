import PropTypes from 'prop-types';
import {
  ALBUMS, POSTS, TODOS, USERS,
} from './REDUCER_TYPES';
// =============================================================================
// basic unit
// =============================================================================
const user = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    geo: PropTypes.shape({
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    catchPhrase: PropTypes.string.isRequired,
    bs: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired;
const todo = PropTypes.shape({
  id: PropTypes.number,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
}).isRequired;
const album = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}).isRequired;
const post = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}).isRequired;
const comment = PropTypes.shape({
  postId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}).isRequired;
const photo = PropTypes.shape({
  albumId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
}).isRequired;
// =============================================================================
// type checks
// =============================================================================
export default {
  [POSTS]: {
    posts: {
      isRequired: PropTypes.objectOf(post).isRequired,
    },
    post: {
      isRequired: post,
    },
    comments: {
      isRequired: PropTypes.objectOf(comment).isRequired,
    },
  },
  [USERS]: {
    user: {
      isRequired: user,
    },
    users: {
      isRequired: PropTypes.objectOf(user).isRequired,
    },
  },
  [TODOS]: {
    todos: {
      isRequired: PropTypes.objectOf(todo).isRequired,
    },
  },
  [ALBUMS]: {
    albums: {
      isRequired: PropTypes.objectOf(album).isRequired,
    },
    album: {
      isRequired: album,
    },
    photos: {
      isRequired: PropTypes.objectOf(photo).isRequired,
    },
    photo: {
      isRequired: photo,
    },
  },
};
