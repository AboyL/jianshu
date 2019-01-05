import React, {
  Component
} from 'react'
import styled from 'styled-components'
import LogoImg from '../../asstes/images/logo.png'
const HeaderWrapper = styled.div`
position:relative;
height:58px;
border-bottom:1px solid #f0f0f0;
`
const Logo = styled.a.attrs({
  href: '/'
})`
position:absolute;
top:0;
left:0;
display:block;
width:100px;
height:58px;
background-image:url(${LogoImg});
background-size:contain;
`
const Nav = styled.div`
width:960px;
height:100%;
padding-right:70px;
box-sizing:border-box;
margin:0 auto;
`
const NavItem = styled.div`
line-height:58px;
padding:0 15px;
font-size:17px;
color:#333333;
&.left{
  float:left;
}
&.right{
  float:right;
  color:#969696;
}
&.active{
  color:#ea6f5a;
}
`
const SearchWrapper = styled.div`
  float:left;
  position: relative;
  .iconfont{
    position:absolute;
    right:5px;
    bottom: 5px;
    line-height:30px;
    width:30px;
    border-radius:50%;
    text-align:center;
    transition:all .3s;
  }
`

const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:160px;
  height:38px;
  padding:0 30px 0 20px;
  margin-top:9px;
  margin-left:20px;
  box-sizing:border-box;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  color:#666;
  transition:width .4s;
  &::placeholder{
    color:#999;
  }
  &:focus{
    width:200px;
    &+.iconfont{
      background:#777;
      color:white;
    }
  }
`
const Additions = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`
const Button = styled.div`
  float:right;
  padding:0 20px;
  margin-top:9px;
  margin-right:20px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  font-size:14px;
  &.writting{
    color:#ec6149;
    background:#fff;
  }
  &.reg{
    color:#ec6149;
  }
`

export default class Header extends Component {
  render () {
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
            <NavSearch />
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
}