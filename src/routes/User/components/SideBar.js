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
import TabRender from './TabRender';
import UserInformation from '../../../components/UserInformation';

/**
 * @description SideBar constants
 * */
const TODOS = 'TODOS';
const ALBUMS = 'ALBUMS';
const POSTS = 'POSTS';

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
  const { language } = useContext(Context);
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
        url={`/user/${user.id}/todos`}
        name={i18n({
          path: 'user.todos',
          language,
        })}
        path="/user/:userId/todos"
        id={TODOS}
      />
      <TabRender
        url={`/user/${user.id}/albums`}
        name={i18n({
          path: 'user.albums',
          language,
        })}
        path="/user/:userId/albums"
        id={ALBUMS}
      />
      <TabRender
        url={`/user/${user.id}/posts`}
        name={i18n({
          path: 'user.posts',
          language,
        })}
        path="/user/:userId/posts"
        id={POSTS}
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
