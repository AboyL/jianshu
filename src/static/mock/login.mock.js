const Mock = require('mockjs')

Mock.mock('api/login', 'post', () => {
  return {
    success: true,
  }
})