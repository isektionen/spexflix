import React, { useState, useEffect } from 'react';

import { FeaturedMovie, Layout, Playlists } from './components';
import { getPlaylists, getPlaylistItems } from './api/youtube';

import { Playlist, Movie } from './types';

const App = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [featuredMovie, setFeaturedMovie] = useState<Movie | undefined>(
    undefined,
  );
  const [dataHasLoaded, setDataHasLoaded] = useState(false);

  const siteName = process.env.REACT_APP_SITE_NAME
    ? process.env.REACT_APP_SITE_NAME
    : 'Youflix';
  const copyrightFromYear = process.env.REACT_APP_COPYRIGHT_FROM_YEAR
    ? Number(process.env.REACT_APP_COPYRIGHT_FROM_YEAR)
    : new Date().getFullYear();

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

      setDataHasLoaded(true);
    };

    fetchData();
  }, []);

  const content = dataHasLoaded ? (
    <Layout
      siteName={siteName}
      copyrightFromYear={copyrightFromYear}
      drawBehindHeader={featuredMovie ? true : false}
    >
      {featuredMovie && <FeaturedMovie item={featuredMovie} />}
      {playlists && <Playlists playlists={playlists} items={movies} />}
    </Layout>
  ) : (
    <Layout
      siteName={siteName}
      copyrightFromYear={copyrightFromYear}
      drawBehindHeader={false}
    >
      <p>Loading</p>
    </Layout>
  );

  return content;
};

export default App;
