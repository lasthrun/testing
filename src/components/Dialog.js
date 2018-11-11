import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Dialog.module.css';
/**
 * @description basic dialog component
 * @param {string} [props.className='']
 * @param {boolean} props.isOpen - indicate the dialog is open or not
 * @param {onClose} props.onClose - triggered by closing the dialog
 * @param {element} props.children - dialog content component
 * */
export default function Dialog(props) {
  const {
    className, isOpen, onClose, children,
  } = props;
  const { container, dialog, active } = styles;

  return (
    <section
      role="presentation"
      className={classNames(container, { [active]: isOpen })}
      onClick={(event) => {
        event.stopPropagation();
        onClose();
      }}
    >
      <div
        role="presentation"
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={classNames(className, dialog, { [active]: isOpen })}
      >
        {isOpen ? children : null}
      </div>
    </section>
  );
}

Dialog.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Dialog.defaultProps = {
  className: '',
};
