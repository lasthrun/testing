import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { getCommentsByPostId } from '../../../apis';
import { POSTS } from '../../../constants/REDUCER_TYPES';
import REDUCERS_TYPE_CHECKS from '../../../constants/REDUCERS_TYPE_CHECKS';
import { useAppContext } from '../../../hooks';
import i18n from '../../../i18n';
import styles from './Comments.module.css';

export default function UserList(props) {
  const {
    updateComments, className, comments, post,
  } = props;
  const {
    container, title, name, first, email,
  } = styles;
  const { language } = useAppContext();

  // get comments data
  useEffect(async () => {
    const response = await getCommentsByPostId(post.id);
    updateComments(response.data);
  }, []);

  return (
    <section className={classNames(container, className)}>
      <span className={title}>
        {i18n({ path: 'posts.comments', language })
          .toUpperCase()}
      </span>
      {Object.keys(comments).map((commentKey, index) => ([
        <span key={`${commentKey} name`} className={classNames(name, { [first]: index === 0 })}>
          {comments[commentKey].name}
        </span>,
        <a
          key={`${commentKey} email`}
          className={email}
          tabIndex={-1}
          href={`mailto:${comments[commentKey].email}`}
        >
          {comments[commentKey].email}
        </a>,
        <span key={`${commentKey} body`}>{comments[commentKey].body}</span>,
      ]))}
    </section>
  );
}

UserList.propTypes = {
  updateComments: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  comments: REDUCERS_TYPE_CHECKS[POSTS].comments.isRequired,
  post: REDUCERS_TYPE_CHECKS[POSTS].post.isRequired,
};
