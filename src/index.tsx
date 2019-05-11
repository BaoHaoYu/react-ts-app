import '@babel/polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './app'

function renderApp () {
  ReactDOM.render(
      <App/>,
      document.querySelector('#react')
  )
}

renderApp()
