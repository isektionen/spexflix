import React from 'react';

import { Footer, Header } from '../../components';

import styles from './layout.module.scss';

export interface Props {
  children: React.ReactNode;
  drawBehindHeader: boolean;
  siteName: string;
  copyrightFromYear: number;
}

const Layout = ({
  siteName,
  copyrightFromYear,
  children,
  drawBehindHeader = true,
}: Props) => {
  return (
    <div className={styles.layout}>
      <Header siteName={siteName} drawBehind={drawBehindHeader} />
      <div className={styles.content}>{children}</div>
      <Footer siteName={siteName} copyrightFromYear={copyrightFromYear} />
    </div>
  );
};

export default Layout;
