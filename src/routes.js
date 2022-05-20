import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Loader from "./components/Loader/Loader";
import AdminLayout from "./layouts/AdminLayout";

import GuestGuard from "./components/Auth/GuestGuard";
import AuthGuard from "./components/Auth/AuthGuard";

import { BASE_URL } from "./config/constant";

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    guard: GuestGuard,
    path: '/signin',
    component: lazy(() => import('./views/auth/signin/SignIn'))
  },  
  {
    exact: true,
    guard: GuestGuard,
    path: '/',
    component: lazy(() => import('./views/auth/signin/SignIn'))
  }, 
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('./views/errors/NotFound404'))
  },
  {
    path: '*',
    layout: AdminLayout,
    guard: AuthGuard,
    routes: [
      {
        exact: true,
        path: '/app',
        component: lazy(() => import('./views/dashboard/dashboard'))
      },
      {
        exact: true,
        path: '/app/players',
        component: lazy(() => import('./views/players/player-search'))
      },
      {
        exact: true,
        path: '/app/playerdetails',
        component: lazy(() => import('./views/players/player-detail'))
      },
      {
        exact: true,
        path: '/app/playerorderhistory',
        component: lazy(() => import('./views/players/player-order-history'))
      },
      {
        exact: true,
        path: '/app/orderdetails',
        component: lazy(() => import('./views/orders/order-detail'))
      },
      {
        exact: true,
        path: '/app/orders',
        component: lazy(() => import('./views/orders/order-search'))
      },
      {
        exact: true,
        path: '/app/orderdetails',
        component: lazy(() => import('./views/orders/order-detail'))
      },
      {
        path: '*',
        exact: true,
        component: () => <Redirect to={BASE_URL}/>
      }
    ]
  }
];

export default routes;
