import React, { useState, useEffect } from 'react';

import { FeaturedMovie, Layout, Playlists } from './components';
import { getPlaylists, getPlaylistItems } from './api/youtube';

const App = () => {
  const [playlists, setPlaylists] = useState(null);
  const [movies, setMovies] = useState({});
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [dataHasLoaded, setDataHasLoaded] = useState(false);

  useEffect(() => {
    const fetchPlaylists = async () => {
      let playlists = await getPlaylists();
      setPlaylists(playlists);
    };

    fetchPlaylists();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      for (const key in playlists) {
        const items = await getPlaylistItems(playlists[key].id);
        setMovies(movies => {
          return { ...movies, [playlists[key].id]: items };
        });
      }
    };

    fetchMovies();
  }, [playlists]);

  useEffect(() => {
    for (const playlistId in movies) {
      const result = movies[playlistId].find(item => {
        return item.id === process.env.REACT_APP_YOUTUBE_FEATURED_VIDEO_ID;
      });

      if (typeof result !== 'undefined') {
        setFeaturedMovie(result);
        break;
      }
    }

    setDataHasLoaded(true);
  }, [movies]);

  const content = dataHasLoaded ? (
    <Layout drawBehindHeader={featuredMovie ? true : false}>
      {featuredMovie && <FeaturedMovie item={featuredMovie} />}
      {playlists && <Playlists playlists={playlists} items={movies} />}
    </Layout>
  ) : (
    <Layout drawBehindHeader={false}>
      <p>Loading</p>
    </Layout>
  );

  return content;
};

export default App;
