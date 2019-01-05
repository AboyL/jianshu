import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  headerSearch: ''
})
export default (state = defaultState, actions) => {
  if (actions.type === actionTypes.SET_HEADER_SEARCH) {
    return state.set('headerSearch', actions.value)
  }
  return state
}