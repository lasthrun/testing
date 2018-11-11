import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Button, { TEXT } from '../../../components/Button';
import styles from './TabRender.module.css';

export default function TabRender(props) {
  const {
    url, className, route, name,
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
          )}
        >
          <Button
            buttonType={TEXT}
            className={tab}
            label={name}
            onHover={() => { setHoverTabId(route); }}
            onLeave={() => { setHoverTabId(''); }}
            onClick={() => { history.push(url); }}
          />
          <FontAwesomeIcon
            className={classNames(tabArrow, { [active]: hoverTabId === route })}
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
  route: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

TabRender.defaultProps = {
  className: '',
};
