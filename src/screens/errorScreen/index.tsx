import React from 'react';
import { RouteComponentProps } from '@reach/router';

import styles from './errorScreen.module.scss';

interface Props extends RouteComponentProps {
  error: any;
}

const ErrorScreen = (props: Props) => {
  console.log(props.error);
  switch (props.error.status) {
    case 403:
      return (
        <div className={styles.errorScreen}>
          <h1>Sorry, out of gas.</h1>
          <p>
            Wow! This flix is so popular that we've drained all available data
            for today :(
            <br />
            Try again tomorrow or ask the administrator to request a higher
            quota limit from Google.
          </p>
        </div>
      );
    case 404:
      return (
        <div className={styles.errorScreen}>
          <h1>Nothing here :(</h1>
          <p>
            This is embarrassing. Try returning to the <a href="/">homepage</a>.
          </p>
        </div>
      );
    default:
      return (
        <div className={styles.errorScreen}>
          <h1>Something happened!</h1>
          <p>
            This is embarrassing. Try returning to the <a href="/">homepage</a>.
          </p>
        </div>
      );
  }
};

export default ErrorScreen;
