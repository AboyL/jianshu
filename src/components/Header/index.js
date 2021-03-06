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
import { actionCreators as LoginActionCreators } from '../../pages/Login/store'
import { Link } from 'react-router-dom'

const Header = (props) => {
  const [focused, setFocused] = useState(0)
  const [mouseIn, setMouseIn] = useState(false)
  const [spin, setSpin] = useState(0)
  const getSearchAear = (list) => {
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={() => { setMouseIn(true) }} onMouseLeave={() => { setMouseIn(false) }}>
          <SearchInfoTitle>
            热门搜索
        <SearchInfoSwicth onClick={() => {
              setSpin(spin + 360);
              props.handleSwitch(props.hotSeachPage, props.hotSearchTotal)
            }}
              spin={spin}
            >
              <i className="iconfont icon-spin spin "></i>
              换一换
        </SearchInfoSwicth>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              list
                .filter((v, index) => index >= props.hotSeachPage * props.hotSeachPageSize
                  && index < (props.hotSeachPage + 1) * props.hotSeachPageSize)
                .map(item => {
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

  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载</NavItem>
        {props.loginStatus ?
          <NavItem className="right" onClick={() => { props.logout() }}>退出登录</NavItem> :
          <Link to="/login">
            <NavItem className="right">登陆</NavItem>
          </Link>
        }
        <NavItem className="right">
          <i className="iconfont icon-Aa"></i>
        </NavItem>
        <SearchWrapper>
          <NavSearch
            value={props.headerSearch}
            onChange={props.setHeaderSearch}
            onFocus={() => { setFocused(true); props.setHotSearchList(props.hotSearchList) }}
            onBlur={() => setFocused(false)} />
          <i className="iconfont icon-sousuo search"></i>
          {getSearchAear(props.hotSearchList)}
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
    headerSearch: state.getIn(['header', 'headerSearch']),
    hotSearchList: state.getIn(['header', 'hotSearchList']),
    hotSeachPage: state.getIn(['header', 'hotSeachPage']),
    hotSeachPageSize: state.getIn(['header', 'hotSeachPageSize']),
    hotSearchTotal: state.getIn(['header', 'hotSearchTotal']),
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setHeaderSearch (e) {
      dispatch(actionCreators.headerSearch(e.target.value))
    },
    setHotSearchList (list) {
      if (list.size <= 0) dispatch(actionCreators.getHotSearchList())
    },
    handleSwitch (page, total) {
      if (page === total) {
        dispatch(actionCreators.hotSearchPageChange(0))
      } else {
        dispatch(actionCreators.hotSearchPageChange(++page))
      }
    },
    logout(){
      dispatch(LoginActionCreators.logout())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)