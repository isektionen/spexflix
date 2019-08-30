import React from 'react';

import { HorizontalMovieScroller } from '../../components';

import { Playlist, Movie } from '../../types';
export interface Props {
  playlists: Playlist[];
  items: Movie[];
  play: CallableFunction;
}

const Playlists = ({ playlists, items, play }: Props) => {
  const horizontalScrollers = playlists.map((playlist, index) => (
    <HorizontalMovieScroller
      key={index}
      items={items.filter(item => {
        return item.playlistId === playlist.id;
      })}
      title={playlist.title}
      play={play}
    />
  ));

  return <section>{horizontalScrollers}</section>;
};

export default Playlists;
