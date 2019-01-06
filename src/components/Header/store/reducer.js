import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  headerSearch: '',
  hotSearchList:[]
})
export default (state = defaultState, actions) => {
  if (actions.type === actionTypes.SET_HEADER_SEARCH) {
    return state.set('headerSearch', actions.value)
  }
  if (actions.type === actionTypes.SET_HOT_SEARCH_LIST) {
    return state.set('hotSearchList', actions.data)
  }
  return state
}