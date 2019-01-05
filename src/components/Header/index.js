import React from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Additions,
  Button
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
const Header = (props) => {
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
          <NavSearch value={props.headerSearch} onChange={props.setHeaderSearch} />
          <i className="iconfont icon-sousuo"></i>
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