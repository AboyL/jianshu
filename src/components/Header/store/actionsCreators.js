import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'
export const headerSearch = (value) => {
  return {
    type: actionTypes.SET_HEADER_SEARCH,
    value
  }
}
const hotSearchList = (data) => (
  {
    type: actionTypes.SET_HOT_SEARCH_LIST,
    data: fromJS(data)
  }
)
export const getHotSearchList = (dispatch) => {
  return (dispatch) => {
    axios.post('api/hot_search_list').then((res) => {
      dispatch(hotSearchList(res.data.data))
    }).catch(() => {
      console.log('err');
    })
  }
}