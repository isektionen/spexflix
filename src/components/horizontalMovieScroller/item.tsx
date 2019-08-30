import React from 'react';

import styles from './item.module.scss';

import { Movie } from '../../types';

const Item = ({ duration, isNew, tags, thumbnails, title }: Movie) => {
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
    <li className={styles.movieItem} style={backgroundImageStyles}>
      <div className={styles.details}>
        <p className={styles.title}>{title}</p>
        <p className={styles.duration}>
          {isNewMarker}
          {duration}
        </p>
        <p className={styles.tags}>{tagComponents}</p>
      </div>
    </li>
  );
};

export default Item;
