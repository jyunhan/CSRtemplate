import * as React from 'react'
import { renderRoutes } from 'react-router-config'
import { SelfIntro } from './SelfIntro'
import { UML } from './UML'
import { NotFoundPage } from './NotFoundPage'

const routes = [
  {
    path: '/',
    exact: true,
    component: SelfIntro
  },
  {
    path: '/uml',
    exact: true,
    component: UML
  },
  { 
    path: '*',
    component: NotFoundPage
  }
]

export default routes
