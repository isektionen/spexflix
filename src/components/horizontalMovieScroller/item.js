import React from 'react';
import PropTypes from 'prop-types';

import styles from './item.module.scss';

const Item = ({ duration, hasLoaded, isNew, tags, thumbnails, title }) => {
  const isNewMarker = isNew ? <span className={styles.isNew}>New</span> : null;

  const backgroundImage = thumbnails ? `url(${thumbnails.medium.url})` : null;

  const tagComponents = tags
    ? tags.map((tag, index) => (
        <span key={index} style={styles.tag}>
          {tag}
          {index !== tags.length - 1 && (
            <span className={styles.tagSeparator}> &bull; </span>
          )}
        </span>
      ))
    : null;

  return (
    <li className={styles.movieItem} style={{ backgroundImage }}>
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

Item.propTypes = {
  duration: PropTypes.string.isRequired,
  new: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

Item.defaultProps = {
  isNew: false,
};

export default Item;
