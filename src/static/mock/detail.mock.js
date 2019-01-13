const Mock = require('mockjs')

Mock.mock('api/get_detail', 'post', () => {
  return {
    success: true,
    data: {
      title: '测试title',
      content: '这个是来自mock.js的数据'
    }
  }
})