import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route } from 'react-router-dom';
import styles from './UserWidget.module.css';
import REDUCERS_TYPE_CHECKS from '../../../constants/REDUCERS_TYPE_CHECKS';
import { USERS } from '../../../constants/REDUCER_TYPES';

export default function UserWidget(props) {
  const { user, className } = props;
  const {
    container, name, information, username, icon,
  } = styles;

  return (
    <Route
      render={({ history }) => (
        <div
          role="button"
          tabIndex="0"
          className={classNames(container, className)}
          onClick={() => { history.push(`/user/${user.id}`); }}
          onKeyPress={() => { history.push(`/user/${user.id}`); }}
        >
          <span className={classNames(name, information)}>
            {user.name}
            <span className={username}>{`@${user.username}`}</span>
          </span>
          <span className={information}>
            <FontAwesomeIcon className={icon} icon="briefcase" />
            {user.company.name}
          </span>
          <span className={information}>
            <FontAwesomeIcon className={icon} icon="phone" />
            {user.phone}
          </span>
          <a
            className={information}
            href={`mailto:${user.email}`}
            tabIndex="-1"
          >
            <FontAwesomeIcon className={icon} icon="envelope" />
            {user.email}
          </a>
          <a
            className={information}
            href={`http://${user.website}`}
            tabIndex="-1"
          >
            <FontAwesomeIcon className={icon} icon="link" />
            {user.website}
          </a>
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
