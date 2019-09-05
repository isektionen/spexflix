import React from 'react';

import { Link } from '@reach/router';

import styles from './logotype.module.scss';

export interface Props {
  text: string;
}

const Logotype = ({ text }: Props) => {
  const letters = text.toUpperCase().split('');
  const maxOffset = Math.floor(letters.length / 2);
  const slope = 10;

  const evenLength = letters.length % 2 === 0 ? true : false;

  const letterComponents = letters.map((letter, index) => {
    const offset = evenLength
      ? index <= maxOffset - 1
        ? index - maxOffset
        : index - maxOffset + 1
      : index + 1 - Math.ceil(letters.length / 2);
    const angle = (-offset / maxOffset) * slope;
    const scale = 1 + Math.pow(Math.abs(offset), 2) * 0.01;

    return (
      <div>
        <a href="/">
          <span
            style={{
              transform: `rotateY(${angle}deg) scaleY(${scale})`,
            }}
          >
            {letter}
          </span>
        </a>
      </div>
    );
  });

  return (
    <Link to="/">
      <div className={styles.logotype}>{letterComponents}</div>
    </Link>
  );
};

export default Logotype;
