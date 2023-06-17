import React, { lazy, Suspense } from 'react';

const LazyMovieCard = lazy(() => import('./MovieCard'));

const MovieCard = props => (
  <Suspense fallback={null}>
    <LazyMovieCard {...props} />
  </Suspense>
);

export default MovieCard;
