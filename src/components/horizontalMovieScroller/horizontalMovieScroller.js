import React from 'react';
import PropTypes from 'prop-types';

import Item from './item';

import styles from './horizontalMovieScroller.module.scss';

const HorizontalMovieScroller = ({ items, title }) => {
  const itemComponents = items
    ? items.map((item, index) => (
        <Item
          key={index}
          duration="unknown"
          tags={item.tags}
          thumbnails={item.thumbnails}
          title={item.title}
        />
      ))
    : null;

  return (
    <div className={styles.horizontalMovieScroller}>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
      <div className={styles.scroller}>
        <ul className={styles.scrollerContent}>
          {itemComponents}
          <li className={styles.rightMargin} />
        </ul>
      </div>
    </div>
  );
};

HorizontalMovieScroller.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default HorizontalMovieScroller;
