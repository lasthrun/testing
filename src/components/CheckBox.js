import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './CheckBox.module.css';
/**
 * @description basic checkbox component
 * @param {string} props.className
 * @param {string} props.title - checkbox title
 * @param {string} props.onCheck
 * @param {string} props.isCompleted - checkbox status
 * */
export default function Checkbox(props) {
  const {
    className, title, onCheck, isCompleted,
  } = props;
  const { container, checkbox } = styles;

  return (
    <section
      className={classNames(container, className)}
    >
      {[
        (<input
          key="checkbox"
          className={checkbox}
          type="checkbox"
          checked={isCompleted}
          onChange={(event) => {
            onCheck(event.target.checked);
          }}
        />),
        <span key="title">{title}</span>,
      ]}
    </section>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  onCheck: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

Checkbox.defaultProps = {
  className: '',
};
