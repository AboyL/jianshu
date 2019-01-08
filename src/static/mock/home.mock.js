const Mock = require('mockjs')

Mock.mock('api/init_home', 'post', () => {
  return {
    success: true,
    data: {
      topicList: [{
        id: '0',
        title: '社会热点',
        imgUrl: '//upload-images.jianshu.io/upload_images/9041302-3e7fd9e152a2d214.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
      }, {
        id: '1',
        title: '人生百态',
        imgUrl: '//upload-images.jianshu.io/upload_images/11897912-203ba57eb15b8dcc?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
      }],
      articleList: [{
        id: '0',
        imgUrl: '//upload-images.jianshu.io/upload_images/11897912-31290f12188fa551?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        title: '广告',
        desc: '用盲盒的方式买衣服——不同职业的人，发出了这封体验报告。'
      }, {
        id: '1',
        imgUrl: '//upload-images.jianshu.io/upload_images/14240694-a98629656134b39e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        title: 'Vue',
        desc: 'Evan You（尤雨溪）（2018年11月16日）前几日的早上在 Vue Toronto 的主题演讲中预演了 Vue 3 。 利用现代浏览器支...'
      }],
      recommendList: [{
        id: '0',
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png',
      }, {
        id: '1',
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
      }, {
        id: '2',
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png',
      }, {
        id: '3',
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
      }]
    }
  }
})