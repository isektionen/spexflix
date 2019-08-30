import React from 'react';

import Item from './item';

import styles from './horizontalMovieScroller.module.scss';

import { Movie } from '../../types';
export interface Props {
  items: Movie[];
  title: string;
  play: CallableFunction;
}

const HorizontalMovieScroller = ({ items, title, play }: Props) => {
  const itemComponents = items
    ? items.map((item: Movie, index: number) => (
        <Item
          key={index}
          id={item.id}
          duration={0}
          tags={item.tags}
          thumbnails={item.thumbnails}
          title={item.title}
          play={play}
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
