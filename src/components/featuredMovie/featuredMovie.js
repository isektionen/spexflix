import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../components';

import styles from './featuredMovie.module.scss';

const FeaturedMovie = ({ item }) => {
  const backgroundImage = `url(${item.thumbnails.medium.url})`;

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
  item: PropTypes.object.isRequired,
};

export default FeaturedMovie;
