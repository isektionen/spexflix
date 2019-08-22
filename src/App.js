import React from 'react';

import { FeaturedMovie, Layout, Playlists } from './components';

const App = () => {
  return (
    <Layout drawBehindHeader={true}>
      <FeaturedMovie id={process.env.REACT_APP_YOUTUBE_FEATURED_VIDEO_ID} />
      <Playlists />
    </Layout>
  );
};

export default App;
