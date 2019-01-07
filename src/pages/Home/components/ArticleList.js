import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;


const List = (props) => {
  return (
    <>
      {
        props.articleList.map(article => {
          return (
            <ListItem key={article.get('id')}>
              <img className="pic" src={article.get('imgUrl')} alt="" />
              <ListInfo>
                <h3 className="title">{article.get('title')}</h3>
                <p className="desc">{article.get('desc')}</p>
              </ListInfo>
            </ListItem>
          )
        })
      }
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}
export default connect(mapStateToProps, null)(List)