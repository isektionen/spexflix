import React from 'react';

import { Icon } from '../../components';

import styles from './player.module.scss';

export interface Props {
  id: string;
  play: CallableFunction;
}

const Player = ({ id, play }: Props) => {
  const handleReturnButtonClick = () => {
    play(undefined);
  };

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
        <div className={styles.returnButton} onClick={handleReturnButtonClick}>
          <Icon name="arrowLeft" />
        </div>
      </div>
    </div>
  );
};

export default Player;
