import * as actionTypes from './actionTypes'
import Axios from 'axios';

export const setDetail = (id) => {
  return (dispatch) => {
    Axios.post('api/get_detail', { id }).then(r => {
      console.log(r)
      dispatch({
        type: actionTypes.GET_DETAIL,
        detail: r.data.data
      })
    })
  }
}