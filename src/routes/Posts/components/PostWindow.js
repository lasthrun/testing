import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button, { TEXT } from '../../../components/Button';
import Dialog from '../../../components/Dialog';
import { POSTS } from '../../../constants/REDUCER_TYPES';
import REDUCERS_TYPE_CHECKS from '../../../constants/REDUCERS_TYPE_CHECKS';
import { useAppContext, useDialog } from '../../../hooks';
import i18n from '../../../i18n';
import CommentArea from '../containers/CommentArea';
import styles from './PostWinodw.module.css';

export default function PostWindow(props) {
  const { className, post } = props;
  const {
    container,
    postTitle,
    postDialog,
    dialogHeader,
    postDialogTitle,
    postDialogBody,
    comments,
  } = styles;
  const { language } = useAppContext();
  const { isOpen, openDialog, closeDialog } = useDialog();

  return (
    <section className={classNames(container, className)}>
      <Button
        buttonType={TEXT}
        className={postTitle}
        label={post.title}
        onClick={openDialog}
      />
      <Dialog className={postDialog} isOpen={isOpen} onClose={closeDialog}>
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
        <span className={classNames(postTitle, postDialogTitle)}>{post.title}</span>
        <span className={postDialogBody}>{post.body}</span>
        <CommentArea className={comments} post={post} />
      </Dialog>
    </section>
  );
}

PostWindow.propTypes = {
  className: PropTypes.string,
  post: REDUCERS_TYPE_CHECKS[POSTS].post.isRequired,
};

PostWindow.defaultProps = {
  className: '',
};
