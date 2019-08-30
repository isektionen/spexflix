import React from 'react';
import PropTypes from 'prop-types';

import { HorizontalMovieScroller } from '../../components';

const Playlists = ({ playlists, items }) => {
  const horizontalScrollers = playlists.map((playlist, index) => (
    <HorizontalMovieScroller
      key={index}
      items={items[playlist.id]}
      title={playlist.title}
    />
  ));

  return <section>{horizontalScrollers}</section>;
};

Playlists.propTypes = {
  playlists: PropTypes.array.isRequired,
  items: PropTypes.object.isRequired,
};

export default Playlists;
