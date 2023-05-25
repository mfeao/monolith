import { Layout as DashboardLayout, Dashboard, Overview, Reports } from '@mfeao/dashboard';
import feedRoutes from '@mfeao/feed';
import planningRoutes from '@mfeao/planning';
import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { DefaultLayout } from '~/layouts';

const routes: RouteObject[] = [
  {
    path: '/',
    element: React.createElement(DefaultLayout),
    children: [
      {
        path: 'dashboard',
        element: React.createElement(DashboardLayout),
        children: [
          {
            index: true,
            element: React.createElement(Dashboard),
          },
          {
            path: 'overview',
            element: React.createElement(Overview),
          },
          {
            path: 'reports',
            element: React.createElement(Reports),
          },
        ],
      },
      ...planningRoutes,
      ...feedRoutes,
    ],
  },
];

export default routes;
