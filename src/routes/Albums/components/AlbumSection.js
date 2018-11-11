import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ALBUMS } from '../../../constants/REDUCER_TYPES';
import REDUCERS_TYPE_CHECKS from '../../../constants/REDUCERS_TYPE_CHECKS';
import PhotoWindow from '../containers/PhotoWindow';
import styles from './AlbumSection.module.css';

export default function AlbumSection(props) {
  const { className, album } = props;
  const {
    container,
    albumRow,
    active,
    albumTitle,
    icon,
  } = styles;
  const [isCollapse, setIsCollapse] = useState(true);

  return (
    <section className={classNames(container, className)}>
      <div
        className={classNames(albumRow, { [active]: !isCollapse })}
        role="presentation"
        onClick={() => {
          setIsCollapse(!isCollapse);
        }}
      >
        <span className={albumTitle}>{album.title}</span>
        <FontAwesomeIcon
          key="icon"
          className={icon}
          icon={isCollapse ? 'caret-down' : 'caret-up'}
        />
      </div>
      {isCollapse ? null : <PhotoWindow album={album} />}
    </section>
  );
}

AlbumSection.propTypes = {
  className: PropTypes.string,
  album: REDUCERS_TYPE_CHECKS[ALBUMS].album.isRequired,
};

AlbumSection.defaultProps = {
  className: '',
};
