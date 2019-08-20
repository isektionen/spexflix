import React from 'react';

import styles from './navigation.module.scss';

const Navigation = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <a
          href="/"
          className={[styles.navLink, styles.navLinkActive].join(' ')}
        >
          Hem
        </a>
      </li>
      <li className={styles.navItem}>
        <a href="/" className={styles.navLink}>
          Nytt hos oss
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
