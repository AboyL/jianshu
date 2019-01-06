import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  headerSearch: '',
  hotSearchList: []
})
export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.SET_HEADER_SEARCH:
      return state.set('headerSearch', actions.value);
    case actionTypes.SET_HOT_SEARCH_LIST:
      return state.set('hotSearchList', actions.data);
    default:
      return state
  }
}