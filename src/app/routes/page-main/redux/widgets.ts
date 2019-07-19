import { fromJS } from 'immutable'
import { createAction, handleActions } from 'redux-actions'
import { addReducers } from 'src/app/store'

export const PAGE_NAEM = '页面主体'
export const PAGE_HASH = 'PAGE-MAIN'
const REDUCER_KEY = 'pageMainReducer'

const GET_DATA = 'GET_DATA' + PAGE_HASH

const defaultData = fromJS({
  server: {},
})

export const getData = () => (dispatch: any, getState: any) => {
  dispatch(createAction(GET_DATA, (p) => p, (p) => PAGE_NAEM + ':获得数据')({}))
}

const reducer = handleActions({}, defaultData)
addReducers({ [REDUCER_KEY]: reducer })
