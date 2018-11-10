import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import REDUCERS_TYPE_CHECKS from '../../../constants/REDUCERS_TYPE_CHECKS';
import { USERS } from '../../../constants/REDUCER_TYPES';
import styles from './SideBar.module.css';
import Context from '../../../Context';
import Button, { BORDER, TEXT } from '../../../components/Button';
import i18n from '../../../i18n';
import Dialog from '../../../components/Dialog';
import { useDialog } from '../../../hooks';

/**
 * @return {element|null}
 */
export default function SideBar(props) {
  const {
    className, user,
  } = props;
  const {
    container,
    name,
    username,
    information,
    icon,
    address,
    addressDialog,
    dialogHeader,
    label,
    data,
  } = styles;
  const { language } = useContext(Context);
  const { isOpen, openDialog, closeDialog } = useDialog();

  return (
    <section className={classNames(container, className)}>
      <h3 className={name}>
        {user.name}
      </h3>
      <span className={username}>{`@${user.username}`}</span>
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
      <Button
        className={address}
        buttonType={BORDER}
        label={i18n({
          path: 'user.addressButton',
          language,
          replace: {
            name: user.name,
          },
        })}
        onClick={openDialog}
      />
      <Dialog className={addressDialog} isOpen={isOpen} onClose={closeDialog}>
        <div className={dialogHeader}>
          <Button
            buttonType={TEXT}
            onClick={closeDialog}
            label={i18n({
              path: 'button.close',
              language,
            })}
          />
        </div>
        <div className={label}>
          <span>
            {`${i18n({
              path: 'user.city',
              language,
            })}:`}
          </span>
          <span>
            {`${i18n({
              path: 'user.street',
              language,
            })}:`}
          </span>
          <span>
            {`${i18n({
              path: 'user.suite',
              language,
            })}:`}
          </span>
          <span>
            {`${i18n({
              path: 'user.zipcode',
              language,
            })}:`}
          </span>
          <span>
            {`${i18n({
              path: 'user.longitude',
              language,
            })}:`}
          </span>
          <span>
            {`${i18n({
              path: 'user.latitude',
              language,
            })}:`}
          </span>
        </div>
        <div className={data}>
          <span>{user.address.city}</span>
          <span>{user.address.street}</span>
          <span>{user.address.suite}</span>
          <span>{user.address.zipcode}</span>
          <span>{user.address.geo.lng}</span>
          <span>{user.address.geo.lat}</span>
        </div>
      </Dialog>
    </section>
  );
}

SideBar.propTypes = {
  user: REDUCERS_TYPE_CHECKS[USERS].user.isRequired,
  className: PropTypes.string,
};

SideBar.defaultProps = {
  className: '',
};
