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
const getSearchAear = (isShow,list) => {
  if (isShow) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
      <SearchInfoSwicth>换一换</SearchInfoSwicth>
        </SearchInfoTitle>
        <SearchInfoList>
          {
            list.map(item=>{
              return (
                <SearchInfoItem key={item}>{item}</SearchInfoItem>
              )
            })
          }
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
            onFocus={() => {setFocused(true);props.setHotSearchList()}}
            onBlur={() => setFocused(false)} />
          <i className="iconfont icon-sousuo"></i>
          {getSearchAear(focused,props.hotSearchList)}
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
    headerSearch: state.getIn(['header','headerSearch']),
    hotSearchList:state.getIn(['header','hotSearchList'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setHeaderSearch (e) {
      dispatch(actionCreators.headerSearch(e.target.value))
    },
    setHotSearchList(){
      dispatch(actionCreators.getHotSearchList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)