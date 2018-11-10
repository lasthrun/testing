import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { getUsers } from '../../../apis';
import REDUCERS_TYPE_CHECKS from '../../../constants/REDUCERS_TYPE_CHECKS';
import { USERS } from '../../../constants/REDUCER_TYPES';
import Context from '../../../Context';

export default function UserList(props) {
  const { updateUsers, className } = props;
  const context = useContext(Context);
  useEffect(async () => {
    const response = await getUsers();
    updateUsers(response.data);
  }, []);

  return (
    <section className={className} />
  );
}

UserList.propTypes = {
  updateUsers: PropTypes.func.isRequired,
  users: REDUCERS_TYPE_CHECKS[USERS].users.isRequired,
};
