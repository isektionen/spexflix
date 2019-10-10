import React, { useState, useEffect } from 'react';
import { Router, Location, navigate } from '@reach/router';

import { getPlaylists, getPlaylistItems } from './api/youtube';

import HomeScreen from './screens/homeScreen';
import PlayerScreen from './screens/playerScreen';
import LoadingScreen from './screens/loadingScreen';
import ErrorScreen from './screens/errorScreen';

import { Playlist, Movie } from './types';

const App = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [featuredMovie, setFeaturedMovie] = useState<Movie | undefined>(
    undefined,
  );
  const [dataHasLoaded, setDataHasLoaded] = useState(false);
  const [error, setError] = useState<any>(false);
  const [loadingScreenDismissed, setLoadingScreenDismissed] = useState(false);

  const dismissLoadingScreen = () => {
    setLoadingScreenDismissed(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
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
      } catch (error) {
        setError(error);
      }
    };

    fetchData().then(() => {
      setDataHasLoaded(true);
    });
  }, []);

  const Routes = (props: any) => (
    <Router {...props}>
      <HomeScreen
        path="/"
        playlists={playlists}
        movies={movies}
        featuredMovie={featuredMovie}
      />
      <PlayerScreen path="/player/:id" />
      <ErrorScreen default error={{ status: 404 }} />
    </Router>
  );
  if (dataHasLoaded && loadingScreenDismissed && !error) {
    return (
      <Location>
        {({ location }) => {
          const { oldLocation } = location.state || {};
          return (
            <>
              <Routes location={oldLocation != null ? oldLocation : location} />
              {oldLocation != null && <Routes location={location} />}
            </>
          );
        }}
      </Location>
    );
  } else if (!loadingScreenDismissed && !error) {
    return (
      <LoadingScreen
        dataHasLoaded={dataHasLoaded}
        dismissLoadingScreen={() => dismissLoadingScreen()}
      />
    );
  } else {
    return <ErrorScreen error={error} />;
  }
};

export default App;
