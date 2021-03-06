import { fromJS } from 'immutable'
// @ts-ignore
import { Dispatch } from 'redux'
import { handleActions } from 'redux-actions'
import { addReducers } from 'src/app/store'

export const PAGE_NAEM = '页面2'
export const PAGE_HASH = 'PAGE2'
const REDUCER_KEY = 'homeReducer'

const defaultData = fromJS({
  server: {},
})

const reducer = handleActions({}, defaultData)
addReducers({ [REDUCER_KEY]: reducer })
