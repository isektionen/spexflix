import React from 'react';

import { Footer, Header } from '../../components';

import styles from './layout.module.scss';

export interface Props {
  children: React.ReactNode;
  drawBehindHeader: boolean;
  siteTitle: string;
  copyrightFromYear: number;
  disabled?: boolean;
}

const Layout = ({
  siteTitle,
  copyrightFromYear,
  children,
  drawBehindHeader = true,
  disabled = false,
}: Props) => {
  return (
    <div className={disabled ? styles.layoutDisabled : styles.layout}>
      <Header siteTitle={siteTitle} drawBehind={drawBehindHeader} />
      <div className={styles.content}>{children}</div>
      <Footer siteTitle={siteTitle} copyrightFromYear={copyrightFromYear} />
    </div>
  );
};

export default Layout;
