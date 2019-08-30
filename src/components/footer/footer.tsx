import React from 'react';

import styles from './footer.module.scss';

export interface Props {
  siteName: string;
  copyrightFromYear: number;
}

const Footer = ({ siteName, copyrightFromYear }: Props) => {
  const year = new Date().getFullYear();
  const copyrightYears =
    copyrightFromYear === year ? year : copyrightFromYear + '-' + year;

  return (
    <footer className={styles.footer}>
      <span>
        &copy; {copyrightYears} {siteName}
      </span>
    </footer>
  );
};

export default Footer;
