import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import { history } from '../store'
import * as bundle from './bundle'
import setConfig, { IRouteItem } from './setConfig'

// 路由配置
const config: IRouteItem[] = [
  {
    route: { path: '/' },
    async: { load: bundle.pageMain },
    children: [
      {
        route: { path: '/page1' },
        async: { load: bundle.page1 }
      },
      {
        route: { path: '/page2' },
        async: { load: bundle.page2 }
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
