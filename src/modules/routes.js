import React from 'react';

import Loadable from 'react-loadable'
function Loading() {
    return <div>Loading...</div>;
  }
  const Home = Loadable({
    loader: () => import('./Home'),
    loading: Loading,
  });
  const Angular = Loadable({
    loader: () => import('./Angular'),
    loading: Loading,
  });
  const Laravel = Loadable({
    loader: () => import('./Laravel'),
    loading: Loading,
  });
  const Main = Loadable({
    loader: () => import('./Main'),
    loading: Loading,
  });
  const Setup_User = Loadable({
    loader: () => import('./Setup_pages/Setup_User'),
    loading: Loading,
  });
  const Setup_Company = Loadable({
    loader: () => import('./Setup_pages/Setup_Company'),
    loading: Loading,
  });
  const Setup_Products = Loadable({
    loader: () => import('./Setup_pages/Setup_Products'),
    loading: Loading,
  });
  const Setup_Country = Loadable({
    loader: () => import('./Setup_pages/Setup_Country'),
    loading: Loading,
  });
  const Setup_Hall = Loadable({
    loader: () => import('./Setup_pages/Setup_Hall'),
    loading: Loading,
  });
  const Setup_Stall = Loadable({
    loader: () => import('./Setup_pages/Setup_Stall'),
    loading: Loading,
  });
const routes = [
    { path: '/Main', exact: true, name: 'Main', component: Main },
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/Laravel', exact: true,  name: 'Laravel', component: Laravel },
    { path: '/Angular', exact: true,  name: 'Angular', component: Angular },
    { path: '/Setup_User', exact: true,  name: 'Setup_User', component: Setup_User },
    { path: '/Setup_Company', exact: true,  name: 'Setup_Company', component: Setup_Company },
    { path: '/Setup_Products', exact: true,  name: 'Setup_Products', component: Setup_Products },
    { path: '/Setup_Country', exact: true,  name: 'Setup_Country', component: Setup_Country },
    { path: '/Setup_Hall', exact: true,  name: 'Setup_Hall', component: Setup_Hall },
    { path: '/Setup_Stall', exact: true,  name: 'Setup_Stall', component: Setup_Stall },
   ];
  
  export default routes;