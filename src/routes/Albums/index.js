import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import connect from 'react-redux/es/connect/connect';
import { Route } from 'react-router-dom';
import { updateAlbums as updateAlbumsAction } from '../../actions';
import { getAlbumsByUserId } from '../../apis';
import { ALBUMS } from '../../constants/REDUCER_TYPES';
import REDUCERS_TYPE_CHECKS from '../../constants/REDUCERS_TYPE_CHECKS';
import { ALBUMS_ROUTE, USERS_ROUTE } from '../../constants/ROUTE_TYPES';
import AlbumSection from './components/AlbumSection';
import styles from './index.module.css';

function AlbumsDetail(props) {
  const {
    match, updateAlbums, albums,
  } = props;
  const {
    container,
    album,
    first,
  } = styles;

  // get albums data
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    const response = await getAlbumsByUserId(match.params.userId);
    updateAlbums(response.data);
    setIsLoading(false);
  }, []);

  return (
    <section className={container}>
      {isLoading ? null
        : Object.keys(albums).map((albumKey, index) => (
          <AlbumSection
            key={albumKey}
            className={classNames(album, { [first]: index === 0 })}
            album={albums[albumKey]}
          />
        ))}
    </section>
  );
}

AlbumsDetail.propTypes = {
  albums: PropTypes.oneOfType([
    REDUCERS_TYPE_CHECKS[ALBUMS].albums.isRequired,
    PropTypes.object,
  ]).isRequired,
  updateAlbums: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    albums: state[ALBUMS].albums,
  }
);

const mapDispatchToProps = { updateAlbums: updateAlbumsAction };

const Router = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumsDetail);

export default () => (
  <Route
    exact
    path={`/${USERS_ROUTE}/:userId/${ALBUMS_ROUTE}`}
    component={Router}
  />
);
