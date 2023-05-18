import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { DefaultLayout } from '~/layouts';
import { DashboardLayout } from '~/modules/dashboard/layouts';
import { Dashboard, Overview, Reports } from '~/modules/dashboard/pages';
import { FeedLayout } from '~/modules/feed/layouts';
import { Feed, Post } from '~/modules/feed/pages';
import { PlanningLayout } from '~/modules/planning/layouts';
import { Planning, Experiments, Archive } from '~/modules/planning/pages';

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
      {
        path: 'planning',
        element: React.createElement(PlanningLayout),
        children: [
          {
            index: true,
            element: React.createElement(Planning),
          },
          {
            path: 'experiments',
            element: React.createElement(Experiments),
          },
          {
            path: 'archive',
            element: React.createElement(Archive),
          },
        ],
      },
      {
        path: 'feed',
        element: React.createElement(FeedLayout),
        children: [
          {
            index: true,
            element: React.createElement(Feed),
          },
          {
            path: ':postSlug',
            element: React.createElement(Post),
          },
        ],
      },
    ],
  },
];

export default routes;
