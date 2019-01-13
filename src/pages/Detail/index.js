import React, { useEffect } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
const DetailWrapper = styled.div`
	overflow: hidden;
	width: 620px;
	margin: 0 auto;
	padding-bottom: 100px;
`;

const Header = styled.div`
	margin: 50px 0 20px 0;
	line-height: 44px;
	font-size: 34px;
	color: #333;
	font-weight: bold;
`;

const Content = styled.div`
	color: #2f2f2f;
	img {
		width: 100%;
	}
	p {
		margin: 25px 0;
		font-size: 16px;
		line-height: 30px;
	}
	b {
		font-weight: bold;
	}
`;
const Detail = (props) => {
	useEffect(() => {
		props.handleDetail('1')
	},true)
	if(!props.loginStatus){
		return <Redirect to="/login"/>
	}
	return (
		<DetailWrapper>
			<Header>{props.detail.title}</Header>
			<Content
				dangerouslySetInnerHTML={{ __html: props.detail.content }}
			/>
		</DetailWrapper>
	)
}
const mapState = (state) => ({
	detail:state.getIn(['detail','detail']),
	loginStatus:state.getIn(['login','logoinStatus'])
});

const mapDispatch = (dispatch) => ({
	handleDetail (id) {
		dispatch(actionCreators.setDetail(id))
	}
});

export default connect(mapState, mapDispatch)(Detail);
