import React from 'react';
import { RouteComponentProps } from '@reach/router';

import Logotype from '../../components/header/logotype';

import styles from './loadingScreen.module.scss';

import config from '../../config/config';

const NotFoundScreen = (props: RouteComponentProps) => (
  <div className={styles.loadingScreen}>
    <Logotype text={config.siteTitle} />
  </div>
);

export default NotFoundScreen;
