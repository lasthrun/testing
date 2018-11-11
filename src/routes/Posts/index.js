import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import connect from 'react-redux/es/connect/connect';
import { Route } from 'react-router-dom';
import classNames from 'classnames';
import { updatePosts as updatePostsAction } from '../../actions';
import { getPostsByUserId } from '../../apis';
import { POSTS } from '../../constants/REDUCER_TYPES';
import REDUCERS_TYPE_CHECKS from '../../constants/REDUCERS_TYPE_CHECKS';
import { POSTS_ROUTE, USERS_ROUTE } from '../../constants/ROUTE_TYPES';
import PostWindow from './components/PostWindow';
import styles from './index.module.css';

function PostsDetail(props) {
  const {
    match, updatePosts, posts,
  } = props;
  const {
    container,
    album,
    first,
  } = styles;

  // get albums data
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    const response = await getPostsByUserId(match.params.userId);
    updatePosts(response.data);
    setIsLoading(false);
  }, []);

  return (
    <section className={container}>
      {isLoading ? null
        : Object.keys(posts).map((postKey, index) => (
          <PostWindow
            key={posts[postKey].id}
            className={classNames(album, { [first]: index === 0 })}
            post={posts[postKey]}
          />
        ))}
    </section>
  );
}

PostsDetail.propTypes = {
  posts: PropTypes.oneOfType([
    REDUCERS_TYPE_CHECKS[POSTS].posts.isRequired,
    PropTypes.object,
  ]).isRequired,
  updatePosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    posts: state[POSTS].posts,
  }
);

const mapDispatchToProps = { updatePosts: updatePostsAction };

const Router = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsDetail);

export default () => (
  <Route
    path={`/${USERS_ROUTE}/:userId/${POSTS_ROUTE}`}
    component={Router}
  />
);
