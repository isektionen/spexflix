import React from 'react';
import PropTypes from 'prop-types';

import { Footer, Header } from '../../components';

import styles from './layout.module.scss';

const Layout = ({ children, drawBehindHeader }) => {
  return (
    <div className={styles.layout}>
      <Header drawBehind={drawBehindHeader} />
      <div className={styles.content}>{children}</div>
      <Footer />
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
