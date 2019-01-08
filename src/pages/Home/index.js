import React, { useEffect } from 'react'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

import Topic from './components/Topic'
import ArticleList from './components/ArticleList'
import Recommend from './components/Recommend'

const Home = (props) => {
  useEffect(() => {
    props.initHomeData()
  })
  return (
    <HomeWrapper>
      <HomeLeft>
        <img src="//upload.jianshu.io/admin_banners/web_images/4600/67db00190e013279ccac4b00bc5702c5f974b9aa.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
        <Topic />
        <ArticleList />
      </HomeLeft>
      <HomeRight>
        <Recommend />
      </HomeRight>
    </HomeWrapper>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    initHomeData () {
      dispatch(actionCreators.initHome())
    }
  }
}
export default connect(null, mapDispatchToProps)(Home)