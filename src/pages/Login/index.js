import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import styled from 'styled-components';

const LoginWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background: #eee;
`;

const LoginBox = styled.div`
	width: 400px;
	height: 180px;
	margin: 100px auto;
	padding-top: 20px;
	background: #fff;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

const Input = styled.input`
	display: block;
	width: 200px;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	margin: 10px auto;
	color: #777;
`;

const Button = styled.div`
	width: 220px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 15px;
	margin: 10px auto;
	text-align: center;
`;
const Login = (props) => {
	const { loginStatus } = props;
	const { account, setAccount } = useState(false)
	const { password, setPassword } = useState(false)
	if (!loginStatus) {
		return (
			<LoginWrapper>
				<LoginBox>
					<Input placeholder='账号' value={account} onChange={(e) => setAccount(e.target.value)} />
					<Input placeholder='密码' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
					<Button onClick={() => props.login(account, password)}>登陆</Button>
				</LoginBox>
			</LoginWrapper>
		)
	} else {
		return <Redirect to='/' />
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'loginStatus'])
})

const mapDispatch = (dispatch) => ({
	login (accout, passwor) {
		dispatch(actionCreators.login(accout, passwor))
	}
})

export default connect(mapState, mapDispatch)(Login);