import * as actionTypes from './actionTypes'
import axios from 'axios'
import store from '../../../store'
import { fromJS } from 'immutable'
const hotSearchList = (data) => ({
  type: actionTypes.SET_HOT_SEARCH_LIST,
  data: fromJS(data)
})
const hotSearchPageInit = (list, pageSize) => ({
  type:actionTypes.SET_HOT_SEARCH_INIT,
  page:0,
  total: Math.floor(list.length / pageSize)
})
export const headerSearch = (value) => {
  return {
    type: actionTypes.SET_HEADER_SEARCH,
    value
  }
}
export const hotSearchPageChange= (page)=>{
  return {
    type:actionTypes.SET_HOT_SEARCH_PAGE,
    page
  }
}
export const getHotSearchList = () => {
  return (dispatch) => {
    axios.post('api/hot_search_list').then((res) => {
      const list = res.data.data
      dispatch(hotSearchPageInit(list, store.getState().getIn(['header','hotSeachPageSize'])))
      dispatch(hotSearchList(list))
    }).catch(() => {
      console.log('err');
    })
  }
}