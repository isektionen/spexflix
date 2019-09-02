import React from 'react';
import { Link } from '@reach/router';

import { Icon } from '../../components';

import styles from './item.module.scss';

import { Movie } from '../../types';

const Item = ({ duration, id, isNew, tags, thumbnails, title }: Movie) => {
  const isNewMarker = isNew ? <span className={styles.isNew}>New</span> : null;

  /** @type {React.CSSProperties} */
  const backgroundImageStyles = thumbnails
    ? {
        backgroundImage: `url(${thumbnails.medium.url})`,
      }
    : undefined;

  const tagComponents = tags
    ? tags.map((tag, index) => (
        <span key={index} className={styles.tag}>
          {tag}
          {index !== tags.length - 1 && (
            <span className={styles.tagSeparator}> &bull; </span>
          )}
        </span>
      ))
    : null;

  return (
    <Link to={'/player/' + id} className={styles.movieItem}>
      <li style={backgroundImageStyles}>
        <div className={styles.details}>
          <Icon name="play" className={styles.playIcon} />
          <p className={styles.title}>{title}</p>
          <p className={styles.duration}>
            {isNewMarker}
            {duration}
          </p>
          <p className={styles.tags}>{tagComponents}</p>
        </div>
      </li>
    </Link>
  );
};

export default Item;
