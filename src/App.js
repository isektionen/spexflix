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
        <HorizontalMovieScroller
          title="Popular right now"
          items={[
            {
              duration: '1 h 12 min',
              isNew: true,
              tags: ['Cool', 'Amazing'],
              title: 'Movie 1',
            },
            {
              duration: '1 h 38 min',
              isNew: true,
              tags: ['Wow'],
              title: 'Movie 2',
            },
            {
              duration: '2 h 2 min',
              tags: ['Wow'],
              title: 'Movie 3',
            },
            {
              duration: '3 h 1 min',
              tags: ['Cool', 'Amazing'],
              title: 'Movie 4',
            },
            {
              duration: '15 min',
              tags: ['Amazing'],
              title: 'Movie 5',
            },
            {
              duration: '3 min',
              tags: ['Wow'],
              title: 'Movie 6',
            },
            {
              duration: '16 min',
              isNew: true,
              tags: ['Neat', 'Wow', 'Amazing'],
              title: 'Movie 7',
            },
            {
              duration: '1 h 43 min',
              tags: ['Cool', 'Amazing'],
              title: 'Movie 8',
            },
          ]}
        />
        <HorizontalMovieScroller
          title="Your personal favourites"
          items={[
            {
              duration: '2 h 2 min',
              tags: ['Wow'],
              title: 'Movie 3',
            },
            {
              duration: '15 min',
              tags: ['Amazing'],
              title: 'Movie 5',
            },
            {
              duration: '3 min',
              tags: ['Wow'],
              title: 'Movie 6',
            },
            {
              duration: '16 min',
              isNew: true,
              tags: ['Neat', 'Wow', 'Amazing'],
              title: 'Movie 7',
            },
            {
              duration: '1 h 43 min',
              tags: ['Cool', 'Amazing'],
              title: 'Movie 8',
            },
          ]}
        />
        <HorizontalMovieScroller
          title="New releases"
          items={[
            {
              duration: '1 h 12 min',
              isNew: true,
              tags: ['Cool', 'Amazing'],
              title: 'Movie 1',
            },
            {
              duration: '1 h 38 min',
              isNew: true,
              tags: ['Wow'],
              title: 'Movie 2',
            },
            {
              duration: '16 min',
              isNew: true,
              tags: ['Neat', 'Wow', 'Amazing'],
              title: 'Movie 7',
            },
          ]}
        />
        <HorizontalMovieScroller
          title="Simply Amazing"
          items={[
            {
              duration: '1 h 12 min',
              isNew: true,
              tags: ['Cool', 'Amazing'],
              title: 'Movie 1',
            },
            {
              duration: '3 h 1 min',
              tags: ['Cool', 'Amazing'],
              title: 'Movie 4',
            },
            {
              duration: '15 min',
              tags: ['Amazing'],
              title: 'Movie 5',
            },
            {
              duration: '16 min',
              isNew: true,
              tags: ['Neat', 'Wow', 'Amazing'],
              title: 'Movie 7',
            },
            {
              duration: '1 h 43 min',
              tags: ['Cool', 'Amazing'],
              title: 'Movie 8',
            },
          ]}
        />
      </section>
    </Layout>
  );
};

export default App;
