import { handleActions } from 'redux-actions'

interface IPayload {
  action: string
  location: {
    pathanme: string
    search: string
    hash: string
  }
}

export default handleActions(
  {
    ['@@router/LOCATION_CHANGE']: (
      state: any,
      action: { payload?: IPayload }
    ) => {
      return { ...state, ...action.payload }
    }
  },
  {
    location: {},
    action: ''
  }
)
