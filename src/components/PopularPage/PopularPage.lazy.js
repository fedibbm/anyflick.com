import React, { lazy, Suspense } from 'react';

const LazyPopularPage = lazy(() => import('./PopularPage'));

const PopularPage = props => (
  <Suspense fallback={null}>
    <LazyPopularPage {...props} />
  </Suspense>
);

export default PopularPage;
