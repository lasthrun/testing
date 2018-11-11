import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.css';
/**
 * @description constants for types of button UI
 * */
export const BASIC = 'BASIC';
export const BORDER = 'BORDER';
export const TEXT = 'TEXT';
/**
 * @description basic button component
 * @param [props.buttonType=BASIC] - indicate which type of UI should the
 * button display
 * @param {string} [props.className=''] - custom class name
 * @param {string} props.label - button label
 * @param {string} [props.tabIndex='0']
 * @param {function} props.onClick - trigger by on click button
 * @param {function} [props.onHover=()=>{}] - trigger by mouse over button and on focus
 * @param {function} [props.onLeave=()=>{}] - trigger by mouse out button and on blur
 * */
export default function Button(props) {
  const {
    className, label, buttonType, onClick, tabIndex, onHover, onLeave,
  } = props;
  const buttonClasses = classNames(
    styles.container,
    { [styles.basic]: buttonType === BASIC },
    { [styles.border]: buttonType === BORDER },
    { [styles.text]: buttonType === TEXT },
    className,
  );

  return (
    <button
      tabIndex={tabIndex}
      className={buttonClasses}
      type="button"
      onClick={onClick}
      onMouseOver={onHover}
      onFocus={() => {
        onHover();
      }}
      onMouseOut={onLeave}
      onBlur={() => {
        onLeave();
      }}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  buttonType: PropTypes.oneOf([
    BASIC,
    BORDER,
    TEXT,
  ]),
  tabIndex: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func,
  onLeave: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  tabIndex: '0',
  buttonType: BASIC,
  onHover: () => {},
  onLeave: () => {},
};
