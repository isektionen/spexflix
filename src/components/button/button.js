import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({ grower, text }) => {
  const className = grower ? styles.buttonGrower : styles.button;

  return <div className={className}>{text}</div>;
};

Button.propTypes = {
  growOnHover: PropTypes.bool,
  text: PropTypes.string,
};

Button.defaultProps = {
  grower: false,
};

export default Button;
