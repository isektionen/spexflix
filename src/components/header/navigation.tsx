import React from 'react';
import { Link } from '@reach/router';

import styles from './navigation.module.scss';

const Navigation = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link to="/" className={styles.navLinkActive}>
          Home
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/" className={styles.navLink}>
          New movies
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
