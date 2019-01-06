// import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList:[{
    id:'0',
    title:'社会热点',
    imgUrl:'//upload-images.jianshu.io/upload_images/9041302-3e7fd9e152a2d214.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id:'1',
    title:'人生百态',
    imgUrl:'//upload-images.jianshu.io/upload_images/11897912-203ba57eb15b8dcc?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
})
export default (state = defaultState, actions) => {
  switch (actions.type) {
    default:
      return state
  }
}