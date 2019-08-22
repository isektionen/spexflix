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
      title={item.title}
    />
  ));

  useEffect(() => {
    getPlaylistItems(playlistId).then(items => {
      setPlaylistItems(items);
      setPlaylistItemsHasLoaded(false);
    });
  }, [playlistId]);

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
  playlistId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HorizontalMovieScroller;
