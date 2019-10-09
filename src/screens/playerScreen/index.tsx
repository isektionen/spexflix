import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { Player } from '../../components';
import PlayerScreenLink from './playerScreenLink';

import styles from './playerScreen.module.scss';

const PlayerScreen = (props: RouteComponentProps<{ id: string }>) => {
  return props.id ? (
    <div className={styles.playerScreen}>
      <Player id={props.id} />
    </div>
  ) : (
    <p>Missing video id</p>
  );
};

export default PlayerScreen;

export { PlayerScreenLink };
