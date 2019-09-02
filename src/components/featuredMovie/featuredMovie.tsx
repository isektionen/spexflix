import React from 'react';
import { Link } from '@reach/router';

import { Button } from '../../components';

import styles from './featuredMovie.module.scss';

import { Movie } from '../../types';
export interface Props {
  item: Movie;
}

const FeaturedMovie = ({ item }: Props) => {
  /** @type {React.CSSProperties} */
  const backgroundImageStyles = item.thumbnails
    ? { backgroundImage: `url(${item.thumbnails.high.url})` }
    : undefined;

  return (
    <section className={styles.featuredMovie} style={backgroundImageStyles}>
      <div className={styles.movieDetails}>
        <p className={styles.title}>{item.title}</p>
        <div className={styles.buttons}>
          <Link to={'/player/' + item.id}>
            <Button grower={true} text="Play" icon="play" action={() => {}} />
          </Link>
          <Button text="Add to my list" />
        </div>
        <p className={styles.synopsis}>{item.description}</p>
      </div>
    </section>
  );
};

export default FeaturedMovie;
