import React from 'react';
import PropTypes from 'prop-types';

import Item from './item';

import styles from './horizontalMovieScroller.module.scss';

const HorizontalMovieScroller = ({ children, title }) => (
  <div className={styles.horizontalMovieScroller}>
    <span className={styles.title}>{title}</span>
    <ul className={styles.scroller}>
      {children}
      <li className={styles.rightMargin} />
    </ul>
  </div>
);

HorizontalMovieScroller.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

HorizontalMovieScroller.Item = Item;

export default HorizontalMovieScroller;
