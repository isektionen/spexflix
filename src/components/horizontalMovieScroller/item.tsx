import React from 'react';

import { Icon } from '../../components';

import styles from './item.module.scss';

import { Movie } from '../../types';
export interface Props extends Movie {
  play: CallableFunction;
}

const Item = ({
  duration,
  id,
  isNew,
  tags,
  thumbnails,
  title,
  play,
}: Props) => {
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
    <li
      className={styles.movieItem}
      style={backgroundImageStyles}
      onClick={() => play(id)}
    >
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
  );
};

export default Item;
