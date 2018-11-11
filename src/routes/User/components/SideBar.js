import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import REDUCERS_TYPE_CHECKS from '../../../constants/REDUCERS_TYPE_CHECKS';
import { USERS } from '../../../constants/REDUCER_TYPES';
import {
  ALBUMS_ROUTE, POSTS_ROUTE, TODOS_ROUTE, USERS_ROUTE,
} from '../../../constants/ROUTE_TYPES';
import styles from './SideBar.module.css';
import Button, { BORDER, TEXT } from '../../../components/Button';
import i18n from '../../../i18n';
import Dialog from '../../../components/Dialog';
import { useAppContext, useDialog } from '../../../hooks';
import TabRender from './TabRender';
import UserInformation from '../../../components/UserInformation';

export default function SideBar(props) {
  // ===============================================================================================
  // variables
  // ===============================================================================================
  const {
    className, user,
  } = props;
  const {
    container, name, username, information, address, addressDialog, dialogHeader, label, data,
  } = styles;
  const { language } = useAppContext();
  const { isOpen, openDialog, closeDialog } = useDialog();
  // ===============================================================================================
  // DOM
  // ===============================================================================================
  return (
    <section className={classNames(container, className)}>
      <h3 className={name}>
        {user.name}
      </h3>
      <span className={username}>{`@${user.username}`}</span>
      <TabRender
        url={`/${USERS_ROUTE}/${user.id}/${TODOS_ROUTE}`}
        name={i18n({
          path: 'user.todos',
          language,
        })}
        route={TODOS_ROUTE}
      />
      <TabRender
        url={`/${USERS_ROUTE}/${user.id}/${ALBUMS_ROUTE}`}
        name={i18n({
          path: 'user.albums',
          language,
        })}
        route={ALBUMS_ROUTE}
      />
      <TabRender
        url={`/${USERS_ROUTE}/${user.id}/${POSTS_ROUTE}`}
        name={i18n({
          path: 'user.posts',
          language,
        })}
        route={POSTS_ROUTE}
      />
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
