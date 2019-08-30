import React from 'react';
import PropTypes from 'prop-types';

import Item from './item';

import styles from './horizontalMovieScroller.module.scss';

import { Movie } from '../../types';
export interface Props {
  items: Movie[];
  title: string;
}

const HorizontalMovieScroller = ({ items, title }: Props) => {
  const itemComponents = items
    ? items.map((item: Movie, index: number) => (
        <Item
          key={index}
          id={item.id}
          duration={0}
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

export default HorizontalMovieScroller;
