import React from 'react';

import { FeaturedMovie, HorizontalMovieScroller, Layout } from './components';

const App = () => {
  return (
    <Layout drawBehindHeader={true}>
      <FeaturedMovie
        title="Featured movie"
        synopsis="This is a really cool movie."
      />
      <section>
        <HorizontalMovieScroller title="Popular right now">
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            isNew={true}
            tags={['Cool', 'Wow']}
            title="Movie 1"
          />
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            isNew={true}
            tags={['Wow']}
            title="Movie 2"
          />
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            tags={['Cool', 'Awesome', 'Wow']}
            title="Movie 3"
          />
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            tags={['Awesome', 'Wow']}
            title="Movie 4"
          />
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            tags={['Cool', 'Wow']}
            title="Movie 5"
          />
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            isNew={true}
            title="Movie 6"
          />
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            tags={['Neat']}
            title="Movie 7"
          />
        </HorizontalMovieScroller>
        <HorizontalMovieScroller title="Neat titles">
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            tags={['Cool', 'Awesome', 'Wow']}
            title="Movie 3"
          />
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            tags={['Awesome', 'Wow']}
            title="Movie 4"
          />
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            tags={['Cool', 'Wow']}
            title="Movie 5"
          />
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            isNew={true}
            title="Movie 6"
          />
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            tags={['Neat']}
            title="Movie 7"
          />
        </HorizontalMovieScroller>
        <HorizontalMovieScroller title="Wow!">
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            isNew={true}
            tags={['Cool', 'Wow']}
            title="Movie 1"
          />
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            isNew={true}
            tags={['Wow']}
            title="Movie 2"
          />
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            tags={['Cool', 'Awesome', 'Wow']}
            title="Movie 3"
          />
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            tags={['Awesome', 'Wow']}
            title="Movie 4"
          />
          <HorizontalMovieScroller.Item
            duration="1 h 12 min"
            tags={['Cool', 'Wow']}
            title="Movie 5"
          />
        </HorizontalMovieScroller>
      </section>
    </Layout>
  );
};

export default App;
