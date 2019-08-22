import React, { useState, useEffect } from 'react';

import { HorizontalMovieScroller } from '../../components';

import { getPlaylists } from '../../api/youtube';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [playlistsHasLoaded, setPlaylistsHasLoaded] = useState(false);

  useEffect(() => {
    getPlaylists().then(playlists => {
      setPlaylists(playlists);
      setPlaylistsHasLoaded(true);
    });
  }, []);

  const horizontalScrollers = playlists.map((playlist, index) => (
    <HorizontalMovieScroller
      key={index}
      playlistId={playlist.id}
      title={playlist.title}
    />
  ));

  return <section>{horizontalScrollers}</section>;
};

export default Playlists;
