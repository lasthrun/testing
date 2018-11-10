import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getUsers } from '../../../apis';
import REDUCERS_TYPE_CHECKS from '../../../constants/REDUCERS_TYPE_CHECKS';
import { USERS } from '../../../constants/REDUCER_TYPES';
import Context from '../../../Context';
import styles from './UserList.module.css';

export default function UserList(props) {
  const { updateUsers, className, users } = props;
  const { container, wrapper } = styles;
  const context = useContext(Context);
  useEffect(async () => {
    const response = await getUsers();
    updateUsers(response.data);
  }, []);

  return (
    <section className={classNames(container, className)}>
      <div className={wrapper} />
    </section>
  );
}

UserList.propTypes = {
  updateUsers: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  users: REDUCERS_TYPE_CHECKS[USERS].users.isRequired,
};
