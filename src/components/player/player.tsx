import React from 'react';
import { Link } from '@reach/router';

import { Icon } from '../../components';

import styles from './player.module.scss';

type Props = {
  id: string;
};

const Player = ({ id }: Props) => {
  return (
    <div className={styles.player}>
      <iframe
        width="100%"
        height="100%"
        className={styles.iframePlayer}
        src={
          'https://www.youtube.com/embed/' +
          id +
          '?autoplay=1&modestbranding=1&rel=0'
        }
      ></iframe>
      <div className={styles.overlay}>
        <Link to="/">
          <div className={styles.returnButton}>
            <Icon name="arrowLeft" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Player;
