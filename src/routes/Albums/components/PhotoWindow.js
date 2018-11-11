import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getPhotosByAlbumId } from '../../../apis';
import { ALBUMS } from '../../../constants/REDUCER_TYPES';
import REDUCERS_TYPE_CHECKS from '../../../constants/REDUCERS_TYPE_CHECKS';
import styles from './PhotoWindow.module.css';
import PhotoBox from './PhotoBox';

export default function PhotoWindow(props) {
  const {
    className, album, photos, updatePhotos,
  } = props;
  const {
    container,
  } = styles;

  // get photos data
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    const getData = async () => {
      const response = await getPhotosByAlbumId(album.id);
      updatePhotos(response.data);
      setIsLoading(false);
    };
    await getData();
    return () => { getData.cancel(); };
  }, []);

  return (
    <section className={classNames(container, className)}>
      {isLoading ? null : (
        Object.keys(photos).map(photoKey => (
          <PhotoBox key={photoKey} photo={photos[photoKey]} />
        ))
      )}
    </section>
  );
}

PhotoWindow.propTypes = {
  className: PropTypes.string,
  photos: PropTypes.oneOfType([
    REDUCERS_TYPE_CHECKS[ALBUMS].photos.isRequired,
    PropTypes.object,
  ]).isRequired,
  album: REDUCERS_TYPE_CHECKS[ALBUMS].album.isRequired,
  updatePhotos: PropTypes.func.isRequired,
};

PhotoWindow.defaultProps = {
  className: '',
};
