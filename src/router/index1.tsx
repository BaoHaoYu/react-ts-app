import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import AsyncRoute from 'src/components/async-route'
import { history } from '../store'
import * as bundle from './bundle'

function RouteConfig () {
  return (
      <ConnectedRouter history={history}>
        <AsyncRoute path={'/'} load={bundle.pageMain}>
          <AsyncRoute path={'/page1'} load={bundle.page1}/>
          <AsyncRoute path={'/page2'} load={bundle.page2}/>
        </AsyncRoute>
      </ConnectedRouter>
  )
}

export default RouteConfig
