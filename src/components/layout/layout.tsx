import React from 'react';

import { Footer, Header } from '../../components';

import styles from './layout.module.scss';

export interface Props {
  children: React.ReactNode;
  drawBehindHeader: boolean;
  siteTitle: string;
  publisher: string;
  copyrightFromYear: number;
}

const Layout = ({
  siteTitle,
  publisher,
  copyrightFromYear,
  children,
  drawBehindHeader = true,
}: Props) => {
  return (
    <div className={styles.layout}>
      <Header siteTitle={siteTitle} drawBehind={drawBehindHeader} />
      <div className={styles.content}>{children}</div>
      <Footer publisher={publisher} copyrightFromYear={copyrightFromYear} />
    </div>
  );
};

export default Layout;
