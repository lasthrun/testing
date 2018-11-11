import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserInformation.module.css';
/**
 * @description used to display user information
 * @param {string} [props.className='']
 * @iconName {string} [props.iconName=''] - icon of this information
 * @iconName {string} props.data - information data
 * @iconName {string} [props.href=''] - when isLink === true, this prop will be mandatory
 * @iconName {string} props.isLink - indicate this information is a link or not
 * */
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
  href(props, propName, componentName) {
    const { isLink, href } = props;
    if (isLink && href === '') {
      return new Error(
        `Invalid prop \`${propName}\` supplied to`
      + ` \`${componentName}\`. Validation failed.`,
      );
    }
    return null;
  },
  isLink: PropTypes.bool,
};

UserInformation.defaultProps = {
  className: '',
  isLink: false,
  href: '',
};
