import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Logotype from './logotype';
import Navigation from './navigation';

import styles from './header.module.scss';

import config from '../../config/config';

const Header = ({ drawBehind }) => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (drawBehind) {
      console.log('Register to scroll');
      window.addEventListener('scroll', () => handleScroll());

      return () => {
        window.removeEventListener('scroll', handleScroll());
      };
    }
  }, [drawBehind]);

  const headerClass = drawBehind
    ? scrollY < 5
      ? styles.headerFixedTransparent
      : styles.headerFixed
    : styles.header;

  return (
    <header className={headerClass}>
      <div className={styles.left}>
        <Logotype text={config.title} />
        <Navigation />
      </div>
    </header>
  );
};

Header.propTypes = {
  drawBehind: PropTypes.bool,
};

Header.defaultProps = {
  drawBehind: false,
};

export default Header;
