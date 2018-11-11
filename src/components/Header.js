import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import classNames from 'classnames';
import { useAppContext } from '../hooks';
import styles from './Header.module.css';
import i18n from '../i18n';
import Button, { TEXT } from './Button';
import { ENGLISH, TRADITIONAL_CHINESE } from '../constants/LANGUAGE_TYPES';
/**
 * @description header component
 * @param {string} [props.className='']
 * */
export default function Header(props) {
  const { className } = props;
  const {
    container, homeButton, en, tc, wrapper, active,
  } = styles;
  const { language, setLanguage } = useAppContext();

  return (
    <header className={classNames(className, container)}>
      <div className={wrapper}>
        <Route
          render={({ history }) => (
            <Button
              buttonType={TEXT}
              className={homeButton}
              label={i18n({
                path: 'header.testing',
                language,
              })}
              onClick={() => { history.push('/'); }}
              tabIndex="-1"
            />
          )}
        />
        <Button
          className={classNames(en, { [active]: language === ENGLISH })}
          buttonType={TEXT}
          label={i18n({ path: 'header.en', language })}
          onClick={() => { setLanguage(ENGLISH); }}
          tabIndex="-1"
        />
        <Button
          className={classNames(tc, { [active]: language === TRADITIONAL_CHINESE })}
          buttonType={TEXT}
          label={i18n({ path: 'header.tc', language })}
          onClick={() => { setLanguage(TRADITIONAL_CHINESE); }}
          tabIndex="-1"
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};
