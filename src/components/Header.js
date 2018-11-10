import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Header.module.css';

export default function Header(props) {
  const { className } = props;

  return (
    <header className={classNames(className, styles.container)}>
      <div />
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string.isRequired,
};
