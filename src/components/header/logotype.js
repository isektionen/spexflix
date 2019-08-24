import React from 'react';
import PropTypes from 'prop-types';

import styles from './logotype.module.scss';

const Logotype = ({ text }) => {
  const letters = text.toUpperCase().split('');
  const maxOffset = Math.floor(letters.length / 2);
  const slope = 10;

  const letterComponents = letters.map((letter, index) => {
    const offset = index + 1 - Math.ceil(letters.length / 2);
    const angle = (-offset / maxOffset) * slope;
    const scale = 1 + Math.pow(Math.abs(offset), 2) * 0.01;

    return (
      <div>
        <span style={{ transform: `rotateY(${angle}deg) scaleY(${scale})` }}>
          {letter}
        </span>
      </div>
    );
  });

  return <div className={styles.logotype}>{letterComponents}</div>;
};

Logotype.propTypes = {
  text: PropTypes.string,
};

export default Logotype;
