import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;


const List = (props) => {
  return (
    <RecommendWrapper>
      {
        props.recommendList.map(recommend => {
          return (
            <RecommendItem key={recommend.get('id')} imgUrl={recommend.get('imgUrl')}></RecommendItem>
          )
        })
      }
    </RecommendWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  }
}
export default connect(mapStateToProps, null)(List)
