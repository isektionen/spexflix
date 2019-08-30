import React from 'react';

import styles from './player.module.scss';

export interface Props {
  id: string;
}

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
    </div>
  );
};

export default Player;
