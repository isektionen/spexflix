import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { Player } from '../components';

const PlayerScreen = (props: RouteComponentProps<{ id: string }>) => {
  return props.id ? <Player id={props.id} /> : <p>Missing video id</p>;
};

export default PlayerScreen;
