import { Route, matchPath } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button, { TEXT } from '../../../components/Button';
import styles from './TabRender.module.css';

export default function TabRender(props) {
  const {
    url, id, className, path, name,
  } = props;
  const {
    container, tab, tabArrow, active,
  } = styles;
  const [hoverTabId, setHoverTabId] = useState('');

  return (
    <Route
      render={({ history }) => (
        <div
          className={classNames(
            className,
            container,
            { [active]: matchPath(history.location.pathname, { path }) },
          )}
        >
          <Button
            buttonType={TEXT}
            className={tab}
            label={name}
            onHover={() => { setHoverTabId(id); }}
            onLeave={() => { setHoverTabId(''); }}
            onClick={() => { history.push(url); }}
          />
          <FontAwesomeIcon
            className={classNames(tabArrow, { [active]: hoverTabId === id })}
            icon="angle-right"
          />
        </div>
      )}
    />
  );
}

TabRender.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

TabRender.defaultProps = {
  className: '',
};
