import React from 'react';

import { FeaturedMovie, Layout } from './components';

const App = () => {
  return (
    <Layout drawBehindHeader={true}>
      <FeaturedMovie
        title="Featured movie"
        synopsis="This is a really cool movie."
      />
      <section>
        <p>
          Edit <code>src/App.js</code> and save to reload.{' '}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </section>
    </Layout>
  );
};

export default App;
