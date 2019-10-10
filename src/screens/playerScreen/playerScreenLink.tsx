import React from 'react';
import { Location, Link } from '@reach/router';

const PlayerScreenLink = (props: any) => (
  <Location>
    {({ location }) => (
      <Link
        state={{ oldLocation: JSON.parse(JSON.stringify(location)) }}
        to={'/player/' + props.movieId}
        {...props}
      />
    )}
  </Location>
);

export default PlayerScreenLink;
