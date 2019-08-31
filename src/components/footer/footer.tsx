import React from 'react';

import styles from './footer.module.scss';

export interface Props {
  publisher: string;
  copyrightFromYear: number;
}

const Footer = ({ publisher, copyrightFromYear }: Props) => {
  const year = new Date().getFullYear();
  const copyrightYears =
    copyrightFromYear === year ? year : copyrightFromYear + '-' + year;

  return (
    <footer className={styles.footer}>
      <span>
        &copy; {copyrightYears} {publisher}
      </span>
    </footer>
  );
};

export default Footer;
