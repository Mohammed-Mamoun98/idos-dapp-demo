import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home' /* webpackChunkName: "Home Chunk" */));

export { Home };
