import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import { history } from '../store'
import * as bundle from './bundle'
import setConfig, { IRouteItem } from './setConfig'

// 路由配置
const config: IRouteItem[] = [
  {
    path: '/',
    componen: bundle.pageMain,
    children: [
      {
        path: '/page1',
        componen: bundle.page1
      },
      {
        path: '/page2',
        componen: bundle.page2
      }
    ]
  }
]

function RouteConfig () {
  const router = setConfig(config)
  return (
    <ConnectedRouter history={history}>
      <>{router}</>
    </ConnectedRouter>
  )
}

export default RouteConfig
