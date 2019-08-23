import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Item from './item';

import styles from './horizontalMovieScroller.module.scss';

import { getPlaylistItems } from '../../api/youtube';

const HorizontalMovieScroller = ({ playlistId, title }) => {
  const [playlistItems, setPlaylistItems] = useState([]);
  const [playlistItemsHasLoaded, setPlaylistItemsHasLoaded] = useState(false);

  const itemComponents = playlistItems.map((item, index) => (
    <Item
      key={index}
      duration="unknown"
      hasLoaded={playlistItemsHasLoaded}
      tags={item.tags}
      thumbnails={item.thumbnails}
      title={item.title}
    />
  ));

  useEffect(() => {
    getPlaylistItems(playlistId).then(items => {
      setPlaylistItems(items);
      setPlaylistItemsHasLoaded(true);
    });
  }, [playlistId]);

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
  playlistId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HorizontalMovieScroller;
