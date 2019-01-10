import React, { useState, useEffect } from 'react'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import styled from 'styled-components'
import Topic from './components/Topic'
import ArticleList from './components/ArticleList'
import Recommend from './components/Recommend'
export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
`
const Home = (props) => {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    props.initHomeData()
  })
  // 设置true使得副作用只发生一次，模拟mounted以及willMounted的效果
  useEffect(() => {
    const scrollEventer = (e) => {
      setShowTop(document.documentElement.scrollTop > 100)
    }
    window.addEventListener('scroll', scrollEventer)
    return () => {
      window.removeEventListener('scroll', scrollEventer);
    }
  },[true])
  const handleGoTop = () => {
		window.scrollTo(0, 0);
  }
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
      {showTop ? <BackTop onClick={() => handleGoTop()}>顶部</BackTop> : ''}
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