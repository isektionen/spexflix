import React from 'react';

import { FeaturedMovie, Layout, Playlists } from './components';

const App = () => {
  return (
    <Layout drawBehindHeader={true}>
      <FeaturedMovie
        title="Featured movie"
        synopsis="This is a really cool movie."
      />
      <Playlists />
    </Layout>
  );
};

export default App;
