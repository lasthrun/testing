import PropTypes from 'prop-types';
import { ALBUMS, POSTS, USERS } from './REDUCER_TYPES';

const user = PropTypes.shape({
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
});

export default {
  [ALBUMS]: {},
  [POSTS]: {
    updatePosts: `${ALBUMS}/updatePosts`,
  },
  [USERS]: {
    user: {
      isRequired: user,
    },
    users: {
      isRequired: PropTypes.objectOf(PropTypes.oneOfType([
        // for user data
        user,
        // for selectedUser
        PropTypes.number,
        // for native
        PropTypes.array,
      ])).isRequired,
    },
  },
};
