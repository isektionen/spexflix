import React from 'react';

import styles from './logotype.module.scss';

export interface Props {
  text: string;
}

const Logotype = ({ text }: Props) => {
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

export default Logotype;
