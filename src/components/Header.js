import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Header.module.css';
import i18n from '../i18n';
import Context from '../Context';
import Button, { TEXT } from './Button';
import { ENGLISH } from '../constants/LANGUAGE_TYPES';

export default function Header(props) {
  const { className } = props;
  const { container, wrapper, homeButton } = styles;
  const { language, setLanguage } = useContext(Context);

  return (
    <header className={classNames(className, container)}>
      <div className={wrapper}>
        <Route
          render={({ history }) => (
            <Button
              className={homeButton}
              label={
              i18n({ path: 'header.home', language })}
              onClick={() => { history.push('/'); }}
            />
          )}
        />
        <div>
          <Button buttonType={TEXT} label="EN" onClick={() => { setLanguage(ENGLISH); }} />
          <Button buttonType={TEXT} label="EN" onClick={() => { setLanguage(ENGLISH); }} />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string.isRequired,
};
