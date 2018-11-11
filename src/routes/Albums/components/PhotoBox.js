import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button, { TEXT } from '../../../components/Button';
import Dialog from '../../../components/Dialog';
import { ALBUMS } from '../../../constants/REDUCER_TYPES';
import REDUCERS_TYPE_CHECKS from '../../../constants/REDUCERS_TYPE_CHECKS';
import { useAppContext, useDialog } from '../../../hooks';
import i18n from '../../../i18n';
import styles from './PhotoBox.module.css';

export default function PhotoBox(props) {
  const {
    className, photo,
  } = props;
  const {
    container,
    imgDialog,
    dialogHeader,
    dialogImg,
    photoTitle,
    cancelButtonWrapper,
  } = styles;
  const { language } = useAppContext();

  // use dialog
  const { isOpen, openDialog, closeDialog } = useDialog();

  return (
    <div
      role="button"
      className={classNames(container, className)}
      tabIndex="0"
      onClick={openDialog}
      onKeyPress={openDialog}
    >
      <img alt={photo.title} src={photo.thumbnailUrl} />
      <Dialog className={imgDialog} isOpen={isOpen} onClose={closeDialog}>
        <div className={dialogHeader}>
          <span className={photoTitle}>{photo.title}</span>
          <div className={cancelButtonWrapper}>
            <Button
              buttonType={TEXT}
              onClick={closeDialog}
              label={i18n({
                path: 'button.close',
                language,
              })}
            />
          </div>
        </div>
        <img className={dialogImg} alt={photo.title} src={photo.url} />
      </Dialog>
    </div>
  );
}

PhotoBox.propTypes = {
  className: PropTypes.string,
  photo: REDUCERS_TYPE_CHECKS[ALBUMS].photo.isRequired,
};

PhotoBox.defaultProps = {
  className: '',
};
