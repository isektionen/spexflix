import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../components';

import styles from './featuredMovie.module.scss';

const FeaturedMovie = ({ synopsis, title }) => (
  <section className={styles.featuredMovie}>
    <div className={styles.movieDetails}>
      <p className={styles.title}>{title}</p>
      <div className={styles.buttons}>
        <Button grower={true} text="Play" />
        <Button text="Add to my list" />
      </div>
      <p className={styles.synopsis}>{synopsis}</p>
    </div>
  </section>
);

FeaturedMovie.propTypes = {
  synopsis: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FeaturedMovie;
