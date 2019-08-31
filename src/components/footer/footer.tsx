import React from 'react';

import styles from './footer.module.scss';

export interface Props {
  siteTitle: string;
  copyrightFromYear: number;
}

const Footer = ({ siteTitle, copyrightFromYear }: Props) => {
  const year = new Date().getFullYear();
  const copyrightYears =
    copyrightFromYear === year ? year : copyrightFromYear + '-' + year;

  return (
    <footer className={styles.footer}>
      <span>
        &copy; {copyrightYears} {siteTitle}
      </span>
    </footer>
  );
};

export default Footer;
