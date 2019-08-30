import React from 'react';

import { HorizontalMovieScroller } from '../../components';

import { Playlist, Movie } from '../../types';
export interface Props {
  playlists: Playlist[];
  items: Movie[];
}

const Playlists = ({ playlists, items }: Props) => {
  const horizontalScrollers = playlists.map((playlist, index) => (
    <HorizontalMovieScroller
      key={index}
      items={items.filter(item => {
        return item.playlistId === playlist.id;
      })}
      title={playlist.title}
    />
  ));

  return <section>{horizontalScrollers}</section>;
};

export default Playlists;
