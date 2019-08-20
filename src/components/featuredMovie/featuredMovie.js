import React from 'react';
import PropTypes from 'prop-types';

import styles from './featuredMovie.module.scss';

const FeaturedMovie = ({ synopsis, title }) => (
  <section className={styles.featuredMovie}>
    <div className={styles.movieDetails}>
      <p className={styles.title}>{title}</p>
      <p className={styles.synopsis}>{synopsis}</p>
    </div>
  </section>
);

FeaturedMovie.propTypes = {
  synopsis: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FeaturedMovie;
