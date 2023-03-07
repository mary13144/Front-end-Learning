import React, {useRef, useState} from 'react';
import {useLoginMutation, useRegisterMutation} from '../store/api/authApi';
import {useDispatch} from 'react-redux';
import {login} from '../store/reducer/authSlice';
import {useLocation, useNavigate} from 'react-router-dom';

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);

	//获取注册api
	const [regFn, {error: regError}] = useRegisterMutation();

	//获取登录api
	const [logFn, {error: logError}] = useLoginMutation();

	//获取Navigate
	const navigate = useNavigate();

	//获取派发器
	const dispatch = useDispatch();

	const userInput = useRef();
	const pswInput = useRef();
	const emailInput = useRef();

	//获取上一个页面地址
	const from = useLocation().state?.preLocation?.pathname || '/';
	console.log(from);

	const loginHandler = (e) => {
		e.preventDefault();
		let username = userInput.current.value;
		let password = pswInput.current.value;
		//处理登录
		if (isLogin) {
			logFn({
				identifier: username,
				password
			}).then(res => {
				if (!res.error) {
					//登录成功后需要向系统中添加一个标识，标记用户的登录状态
					//登录状态（布尔值，token（jwt），用户信息）
					dispatch(login({
						token: res.data.jwt,
						user: res.data.user
					}));
					//重定向到根目录
					navigate(from, {replace: true});

				}
			});
		} else {
			let email = emailInput.current.value;
			regFn({
				username,
				email,
				password
			}).then(res => {
				if (!res.error) {
					setIsLogin(true);
				}
			});
		}
	};

	return (
		<div onSubmit={loginHandler}>
			<h2>
				{
					isLogin ? '登录' : '注册'
				}
			</h2>
			{
				regError &&
				<p style={{color: 'red'}}>
					{
						regError.data.error.message
					}
				</p>
			}
			{
				logError &&
				<p style={{color: 'red'}}>
					{
						logError.data.error.message
					}
				</p>
			}
			<form>
				<div>
					<input ref={userInput} type="text" placeholder={'username'}/>
				</div>
				{
					!isLogin &&
					<div>
						<input ref={emailInput} type="email" placeholder={'email'}/>
					</div>
				}
				<div>
					<input ref={pswInput} type="password" placeholder={'password'}/>
				</div>
				<div>
					<button>
						{
							isLogin ? '登录' : '注册'
						}
					</button>
					<a href="#" onClick={() => {
						setIsLogin(prevState => !prevState);
					}
					}>
						{
							isLogin ? '没有账号？立即注册' : '已有账号？立即登录'
						}
					</a>
				</div>
			</form>
		</div>
	);
};

export default AuthForm;
