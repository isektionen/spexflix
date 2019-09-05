import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';

import { getPlaylists, getPlaylistItems } from './api/youtube';

import HomeScreen from './screens/homeScreen';
import PlayerScreen from './screens/playerScreen';
import LoadingScreen from './screens/loadingScreen';
import NotFoundScreen from './screens/notFoundScreen';

import { Playlist, Movie } from './types';

const App = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [featuredMovie, setFeaturedMovie] = useState<Movie | undefined>(
    undefined,
  );
  const [dataHasLoaded, setDataHasLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let playlists: Playlist[] = await getPlaylists();
      setPlaylists(playlists);

      let movies: Movie[] = [];
      for (const key in playlists) {
        const items: Movie[] = await getPlaylistItems(playlists[key].id);
        movies.push(...items);
      }
      setMovies(movies);

      const featuredMovie: Movie | undefined = movies.find(movie => {
        return movie.id === process.env.REACT_APP_YOUTUBE_FEATURED_VIDEO_ID;
      });
      setFeaturedMovie(featuredMovie);
    };

    fetchData().then(() => setDataHasLoaded(true));
  }, []);

  if (dataHasLoaded) {
    return (
      <Router>
        <HomeScreen
          path="/"
          playlists={playlists}
          movies={movies}
          featuredMovie={featuredMovie}
        />
        <PlayerScreen path="/player/:id" />
        <NotFoundScreen default />
      </Router>
    );
  } else {
    return <LoadingScreen />;
  }
};

export default App;
