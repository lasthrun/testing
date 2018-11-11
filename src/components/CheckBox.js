import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './CheckBox.module.css';
/**
 * @description basic checkbox component
 * @param {string} [props.className='']
 * @param {string} props.title - checkbox title
 * @param {string} props.onCheck
 * @param {string} props.isChecked
 * */
export default function Checkbox(props) {
  const {
    className, title, onCheck, isChecked,
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
          checked={isChecked}
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
  isChecked: PropTypes.bool.isRequired,
};

Checkbox.defaultProps = {
  className: '',
};
