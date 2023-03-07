import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const About = () => {
	return (
		<div>

			<Navigate to={'/student/1'} replace/>
			<ul>
				<li>孙悟空</li>
				<li>猪八戒</li>
				<li>沙和尚</li>
				<li>唐僧</li>
			</ul>
			{/*
				Outlet用来表示嵌套路由中的组件
			*/}
			<Outlet/>
		</div>
	);
};

export default About;
