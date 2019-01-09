import * as actionTypes from './actionTypes'
import Axios from 'axios';
import { fromJS } from 'immutable'
const initHomeAction = (data) => ({
  type: actionTypes.INIT_HOME,
  topicList:fromJS(data.topicList),
  articleList:fromJS(data.articleList),
  recommendList:fromJS(data.recommendList),
})

export const initHome = () => {
  return (dispatch) => {
    Axios.post('api/init_home').then((res)=>{
      dispatch(initHomeAction(res.data.data))
    })
  }
}