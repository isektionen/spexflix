import React from 'react';
import PropTypes from 'prop-types';

import Item from './item';

import styles from './horizontalMovieScroller.module.scss';

const HorizontalMovieScroller = ({ items, title }) => {
  const itemComponents = items.map((item, index) => <Item {...item} />);

  return (
    <div className={styles.horizontalMovieScroller}>
      <span className={styles.title}>{title}</span>
      <ul className={styles.scroller}>
        {itemComponents}
        <li className={styles.rightMargin} />
      </ul>
    </div>
  );
};

HorizontalMovieScroller.propTypes = {
  title: PropTypes.string.isRequired,
  items: { ...Item.propTypes },
};

export default HorizontalMovieScroller;
