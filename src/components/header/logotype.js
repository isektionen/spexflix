import React from 'react';
import PropTypes from 'prop-types';

import styles from './logotype.module.scss';

const Logotype = ({ text }) => <span className={styles.logotype}>{text}</span>;

Logotype.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logotype;
