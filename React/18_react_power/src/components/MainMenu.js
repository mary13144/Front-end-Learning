import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../store/reducer/authSlice';

const MainMenu = () => {

	//获取登录状态
	const auth = useSelector(state => state.auth);

	//获取派发器
	const dispatch = useDispatch();

	return (
		<div>
			<ul>
				<li>
					<Link to={'/'}>首页</Link>
				</li>

				{
					auth.isLogin && <>
						<li>
							<Link to={'/profile'}>用户信息</Link>
						</li>

						<li>
							<Link to={'/student'}>学生信息</Link>
						</li>

						<li>
							<Link to={'/'} onClick={() => {
								dispatch(logout());
							}}>登出</Link>
						</li>

					</>
				}

				{
					!auth.isLogin && <li>
						<Link to={'/auto-form'}>登录/注册</Link>
					</li>
				}
			</ul>
		</div>
	);
};

export default MainMenu;
