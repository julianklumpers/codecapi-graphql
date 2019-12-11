import * as React from 'react'

export interface IRoute {
  title?: string
  path: string
  component: React.LazyExoticComponent<any> | any
  exact?: boolean
}

export interface IRoutes {
  app: IRoute[]
}

export const routes: IRoutes = {
  app: [
    {
      title: 'Users',
      path: '/users',
      component: React.lazy(() => import('../containers/Users')),
      exact: true,
    },
    {
      title: '{{username}}',
      path: '/users/:username',
      component: React.lazy(() => import('../containers/User')),
      exact: true,
    },
  ],
}
