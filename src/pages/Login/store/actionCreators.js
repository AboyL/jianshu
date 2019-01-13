import * as actionTypes from './actionTypes'
import Axios from 'axios';
import { fromJS } from 'immutable'
const changeLoginStatus = (value) => ({
  type: actionTypes.CHANGE_LOGIN,
  status: fromJS(value)
})

export const login = () => {
  return (dispatch) => {
    Axios.post('api/login').then((res) => {
      dispatch(changeLoginStatus(true))
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(changeLoginStatus(false))
  }
}