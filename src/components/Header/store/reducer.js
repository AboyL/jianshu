import * as actionTypes from './actionTypes'

const defaultState = {
  headerSearch: ''
}
export default (state = defaultState, actions) => {
  if (actions.type === actionTypes.SET_HEADER_SEARCH) {
    return { headerSearch: actions.value }
  }
  return state
}