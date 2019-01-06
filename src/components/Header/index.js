import React, { useState } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwicth,
  SearchInfoList,
  SearchInfoItem,
  Additions,
  Button
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
const getSearchAear = (isShow) => {
  if (isShow) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
      <SearchInfoSwicth>换一换</SearchInfoSwicth>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null
  }
}
const Header = (props) => {
  const [focused, setFocused] = useState(0)
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载</NavItem>
        <NavItem className="right">登陆</NavItem>
        <NavItem className="right">
          <i className="iconfont icon-Aa"></i>
        </NavItem>
        <SearchWrapper>
          <NavSearch
            value={props.headerSearch}
            onChange={props.setHeaderSearch}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)} />
          <i className="iconfont icon-sousuo"></i>
          {getSearchAear(focused)}
        </SearchWrapper>
      </Nav>
      <Additions>
        <Button className="writting">
          <i className="iconfont icon-yumaobi"></i>
          写文章
          </Button>
        <Button className="reg">注册</Button>
      </Additions>
    </HeaderWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    // headerSearch: state.header.get('headerSearch') // x
    headerSearch: state.get('header').get('headerSearch') // 对
    // headerSearch: state.getIn(['header','headerSearch']) // 也可以
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setHeaderSearch (e) {
      dispatch(actionCreators.headerSearch(e.target.value))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)