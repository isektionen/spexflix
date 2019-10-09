import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';

import styles from './notFoundScreen.module.scss';

const NotFoundScreen = (props: RouteComponentProps) => (
  <div className={styles.notFoundScreen}>
    <h1>Nothing here :(</h1>
    <p>
      This is embarrassing. Try returning to the <Link to="/">homepage</Link>.
    </p>
  </div>
);

export default NotFoundScreen;
