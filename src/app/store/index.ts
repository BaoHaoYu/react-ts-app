import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createHashHistory } from 'history'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import log from 'src/app/util/middleware/log'
import reducer from '../router/reducer'

const middle = [thunk, log]
const history = createHashHistory()

let compose1: any
// @ts-ignore
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  // @ts-ignore
  compose1 = compose(applyMiddleware(...middle, routerMiddleware(history)), window.__REDUX_DEVTOOLS_EXTENSION__())
} else {
  compose1 = compose(applyMiddleware(...middle, routerMiddleware(history)))
}

let storeObj = {
  router: reducer
}

const store = createStore(
    connectRouter(history)(combineReducers(storeObj)),
    {},
    compose1
)

function addReducers (obj: any) {
  storeObj = { ...storeObj, ...obj }
  store.replaceReducer(combineReducers({ ...storeObj, ...obj }))
}

export {
  addReducers,
  history
}

export default store
