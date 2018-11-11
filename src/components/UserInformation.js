import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserInformation.module.css';

export default function UserInformation(props) {
  const {
    className, iconName, isLink, href, data,
  } = props;
  const { icon } = styles;

  const content = () => [
    <FontAwesomeIcon key="icon" className={icon} icon={iconName} />,
    data,
  ];

  return isLink ? (
    <a
      className={className}
      href={href}
      tabIndex="-1"
    >
      {content()}
    </a>
  ) : (
    <span className={className}>
      {content()}
    </span>
  );
}

UserInformation.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  href: PropTypes.string,
  isLink: PropTypes.bool,
};

UserInformation.defaultProps = {
  className: '',
  isLink: false,
  href: '',
};
