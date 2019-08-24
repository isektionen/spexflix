import React from 'react';

import styles from './footer.module.scss';

import config from '../../config/config';

const Footer = () => {
  const year = new Date().getFullYear();
  const copyrightYears =
    config.copyrightFromYear === year
      ? year
      : config.copyrightFromYear + '-' + year;

  return (
    <footer className={styles.footer}>
      <span>
        &copy; {copyrightYears} {config.title}
      </span>
    </footer>
  );
};

export default Footer;
