import React from 'react';
import PropTypes from 'prop-types';

import { Footer, Header } from '../../components';

import styles from './layout.module.scss';

const Layout = ({ children, drawBehindHeader }) => {
  return (
    <div className={styles.layout}>
      <Header drawBehind={drawBehindHeader} />
      <div className={styles.content}>{children}</div>
      <Footer
        siteName={process.env.REACT_APP_SITE_NAME}
        copyrightFromYear={process.env.REACT_APP_COPYRIGHT_FROM_YEAR}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  drawBehindHeader: PropTypes.bool,
};

Layout.defaultProps = {
  drawBehindHeader: false,
};

export default Layout;
