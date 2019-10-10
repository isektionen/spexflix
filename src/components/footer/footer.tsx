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
      <p>
        YouFlix is made just for fun and is open sourced at{' '}
        <a href="https://github.com/vmorsell/react-youflix" target="_blank">
          GitHub
        </a>
        .
      </p>
      <p>
        &copy; {copyrightYears} {publisher}.
      </p>
    </footer>
  );
};

export default Footer;
