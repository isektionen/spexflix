import React from 'react';
import PropTypes from 'prop-types';

import styles from './footer.module.scss';

const Footer = ({ siteName, copyrightFromYear }) => {
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

Footer.propTypes = {
  siteName: PropTypes.string,
  copyrightFromYear: PropTypes.number,
};

Footer.defaultProps = {
  siteName: 'YouFlix',
  copyrightFromYear: new Date().getFullYear(),
};

export default Footer;
