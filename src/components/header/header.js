import React from 'react';

import Logotype from './logotype';
import Navigation from './navigation';

import styles from './header.module.scss';

import config from '../../config/config';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.left}>
      <Logotype text={config.title.toUpperCase()} />
      <Navigation />
    </div>
  </header>
);

export default Header;
