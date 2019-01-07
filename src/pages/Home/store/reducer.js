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
  }],
articleList:[{
    id:'0',
    imgUrl:'//upload-images.jianshu.io/upload_images/11897912-31290f12188fa551?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    title:'广告',
    desc:'用盲盒的方式买衣服——不同职业的人，发出了这封体验报告。'
  },{
    id:'1',
    imgUrl:'//upload-images.jianshu.io/upload_images/14240694-a98629656134b39e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    title:'Vue',
    desc:'Evan You（尤雨溪）（2018年11月16日）前几日的早上在 Vue Toronto 的主题演讲中预演了 Vue 3 。 利用现代浏览器支...'
  }
]
})
export default (state = defaultState, actions) => {
  switch (actions.type) {
    default:
      return state
  }
}