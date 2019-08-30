import React, { useState, useEffect } from 'react';

import Logotype from './logotype';
import Navigation from './navigation';

import styles from './header.module.scss';

export interface Props {
  drawBehind: boolean;
  siteName: string;
}

const Header = ({ drawBehind = false, siteName }: Props) => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (drawBehind) {
      console.log('Register to scroll');
      window.addEventListener('scroll', () => handleScroll());

      return () => {
        window.removeEventListener('scroll', () => handleScroll());
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
        <Logotype text={siteName} />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
