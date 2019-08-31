import React, { useState, useEffect } from 'react';

import { FeaturedMovie, Layout, Player, Playlists } from './components';
import { getPlaylists, getPlaylistItems } from './api/youtube';

import { Playlist, Movie } from './types';

const App = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [playerMovieId, setPlayerMovieId] = useState<string | undefined>(
    undefined,
  );
  const [featuredMovie, setFeaturedMovie] = useState<Movie | undefined>(
    undefined,
  );
  const [dataHasLoaded, setDataHasLoaded] = useState(false);

  const siteTitle = process.env.REACT_APP_SITE_TITLE
    ? process.env.REACT_APP_SITE_TITLE
    : 'Youflix';
  const publisher = process.env.REACT_APP_PUBLISHER
    ? process.env.REACT_APP_PUBLISHER
    : 'Youflix';
  const copyrightFromYear = process.env.REACT_APP_COPYRIGHT_FROM_YEAR
    ? Number(process.env.REACT_APP_COPYRIGHT_FROM_YEAR)
    : new Date().getFullYear();

  const play: CallableFunction = (id: string) => {
    setPlayerMovieId(id);
  };

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
    <>
      <Layout
        siteTitle={siteTitle}
        publisher={publisher}
        copyrightFromYear={copyrightFromYear}
        drawBehindHeader={featuredMovie ? true : false}
        disabled={playerMovieId ? true : false}
      >
        {featuredMovie && <FeaturedMovie item={featuredMovie} play={play} />}
        {playlists && (
          <Playlists playlists={playlists} items={movies} play={play} />
        )}
      </Layout>
      {playerMovieId && <Player id={playerMovieId} play={play} />}
    </>
  ) : (
    <Layout
      siteTitle={siteTitle}
      publisher={publisher}
      copyrightFromYear={copyrightFromYear}
      drawBehindHeader={false}
    >
      <p>Loading</p>
    </Layout>
  );

  return content;
};

export default App;
