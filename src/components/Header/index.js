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

const Header = (props) => {
  const [focused, setFocused] = useState(0)
  const [mouseIn, setMouseIn] = useState(false)
  const [spin, setSpin] = useState(false)
  const getSearchAear = (list) => {
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={() => { setMouseIn(true) }} onMouseLeave={() => { setMouseIn(false) }}>
          <SearchInfoTitle>
            热门搜索
        <SearchInfoSwicth onClick={() => {
              setSpin(true);
              setTimeout(() => {
                setSpin(false)
              }, 200);
              props.handleSwitch(props.hotSeachPage, props.hotSearchTotal)
            }}>
              <i className={"iconfont icon-spin spin " + (spin ? 'spining' : '')}></i>
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
        <NavItem className="right">登陆</NavItem>
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
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)