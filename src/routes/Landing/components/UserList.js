import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getUsers } from '../../../apis';
import REDUCERS_TYPE_CHECKS from '../../../constants/REDUCERS_TYPE_CHECKS';
import { USERS } from '../../../constants/REDUCER_TYPES';
import styles from './UserList.module.css';
import UserWidget from './UserWidget';

export default function UserList(props) {
  const { updateUsers, className, users } = props;
  const { container } = styles;
  useEffect(async () => {
    const response = await getUsers();
    updateUsers(response.data);
  }, []);

  return (
    <section className={classNames(container, className)}>
      {Object.keys(users).map(userKey => (
        <UserWidget
          key={userKey}
          user={users[userKey]}
        />
      ))}
    </section>
  );
}

UserList.propTypes = {
  updateUsers: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  users: REDUCERS_TYPE_CHECKS[USERS].users.isRequired,
};
