import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import styles from './UserWidget.module.css';
import REDUCERS_TYPE_CHECKS from '../../../constants/REDUCERS_TYPE_CHECKS';
import { USERS } from '../../../constants/REDUCER_TYPES';
import UserInformation from '../../../components/UserInformation';

export default function UserWidget(props) {
  const { user, className } = props;
  const {
    container, name, information, username,
  } = styles;

  return (
    <Route
      render={({ history }) => (
        <div
          role="button"
          tabIndex="0"
          className={classNames(container, className)}
          onClick={() => { history.push(`/user/${user.id}/todos`); }}
          onKeyPress={() => { history.push(`/user/${user.id}/todos`); }}
        >
          <span className={classNames(name, information)}>
            {user.name}
            <span className={username}>{`@${user.username}`}</span>
          </span>
          <UserInformation className={information} iconName="briefcase" data={user.company.name} />
          <UserInformation className={information} iconName="phone" data={user.phone} />
          <UserInformation
            className={information}
            iconName="envelope"
            data={user.email}
            isLink
            href={`mailto:${user.email}`}
          />
          <UserInformation
            className={information}
            iconName="link"
            data={user.website}
            isLink
            href={`http://${user.website}`}
          />
        </div>
      )}
    />
  );
}

UserWidget.propTypes = {
  user: REDUCERS_TYPE_CHECKS[USERS].user.isRequired,
  className: PropTypes.string,
};

UserWidget.defaultProps = {
  className: '',
};
