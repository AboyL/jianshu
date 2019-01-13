import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
const defaultState = fromJS({
  detail: {
    title: '',
    content: ''
  }
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAIL:
      return state.set('detail', action.detail)
    default:
      return state;
  }
}