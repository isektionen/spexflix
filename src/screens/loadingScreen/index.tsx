import React, { useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';

import { Logotype } from '../../components';

import styles from './loadingScreen.module.scss';

import config from '../../config/config';

interface Props extends RouteComponentProps {
  dataHasLoaded: boolean;
  dismissLoadingScreen: CallableFunction;
}

const NotFoundScreen = (props: Props) => {
  const showOnlyFirstLetter = !props.dataHasLoaded;

  useEffect(() => {
    if (props.dataHasLoaded) {
      setTimeout(() => props.dismissLoadingScreen(), 1000);
    }
  }, [props.dataHasLoaded]);

  return (
    <div className={styles.loadingScreen}>
      <Logotype
        text={config.siteTitle}
        showOnlyFirstLetter={showOnlyFirstLetter}
      />
    </div>
  );
};

export default NotFoundScreen;
