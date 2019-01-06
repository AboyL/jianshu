const Mock =require('mockjs')

Mock.mock('api/hot_search_list','post',()=>{
  return {
    success:true,
    data:['辉夜大小姐','柯南','鲁路修','全职猎人','哆啦A梦','JavaScript','python','机器学习']
  }
})