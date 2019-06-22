import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import Router from './router'
import store from './store'

class App extends React.Component<any> {
  public render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default hot(module)(App)
