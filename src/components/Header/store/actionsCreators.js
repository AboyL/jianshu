import * as actionTypes from './actionTypes'
export const headerSearch = (value) => {
  return {
    type: actionTypes.SET_HEADER_SEARCH,
    value
  }
}