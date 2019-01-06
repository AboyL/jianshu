import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  headerSearch: '',
  hotSearchList: [],
  hotSeachPage: 0,
  hotSeachPageSize: 10,
  hotSearchTotal: 0,
})
export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.SET_HEADER_SEARCH:
      return state.set('headerSearch', actions.value);
    case actionTypes.SET_HOT_SEARCH_LIST:
      return state.set('hotSearchList', actions.data);
    case actionTypes.SET_HOT_SEARCH_INIT:
      return state.merge({
        hotSeachPage: actions.page,
        hotSearchTotal: actions.total
      })
    case actionTypes.SET_HOT_SEARCH_PAGE:
      return state.set('hotSeachPage', actions.page)
    default:
      return state
  }
}