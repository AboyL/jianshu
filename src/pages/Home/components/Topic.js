import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px;
	background:#f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

const Topic = (props) => {
	return (
		<TopicWrapper>
			{
				props.topicList.map(topic => (
					<TopicItem key={topic.get('id')}>
						<img className="topic-pic" src={topic.get('imgUrl')} alt="" />
						{topic.get('title')}
					</TopicItem>
				))
			}
		</TopicWrapper>
	)
}
const mapStateToProps = (state) => {
	return {
		topicList: state.getIn(['home', 'topicList'])
	}
}
export default connect(mapStateToProps, null)(Topic)