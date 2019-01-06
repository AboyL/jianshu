import React from 'react'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './style'
import Topic from './components/Topic'
const Home = () => {
  return (
    <HomeWrapper>
      <HomeLeft>
        <img src="//upload.jianshu.io/admin_banners/web_images/4600/67db00190e013279ccac4b00bc5702c5f974b9aa.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
        <Topic/>
      </HomeLeft>
      <HomeRight>right</HomeRight>
    </HomeWrapper>
  )
}
export default Home