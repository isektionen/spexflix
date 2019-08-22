import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../components';

import { getItems } from '../../api/youtube';

import styles from './featuredMovie.module.scss';

const FeaturedMovie = ({ id }) => {
  const [item, setItem] = useState([]);
  const [itemHasLoaded, setItemHasLoaded] = useState(false);

  const backgroundImage = itemHasLoaded
    ? `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(${
        item.thumbnails.medium.url
      })`
    : null;

  useEffect(() => {
    getItems(id).then(items => {
      setItem(items[0]);
      setItemHasLoaded(true);
    });
  }, [id]);

  return (
    <section
      className={styles.featuredMovie}
      style={{
        backgroundImage,
      }}
    >
      <div className={styles.movieDetails}>
        <p className={styles.title}>{item.title}</p>
        <div className={styles.buttons}>
          <Button grower={true} text="Play" />
          <Button text="Add to my list" />
        </div>
        <p className={styles.synopsis}>{item.description}</p>
      </div>
    </section>
  );
};

FeaturedMovie.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FeaturedMovie;
