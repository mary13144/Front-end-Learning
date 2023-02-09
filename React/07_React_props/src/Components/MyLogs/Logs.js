import React from 'react';
import Item from './Item';
import './Logs.css';
import Mydate from './Mydate';

const Logs = () => {

	//在函数组件中，属性相当于函数的参数，可以通过参数来获取到父组件传递过来的属性值
	//可以在函数组件中定义一个参数(通常为props)，props指向的是一个对象，包含了父组件传递的所有参数
	//参数可以传递任何值包括函数
	return (
		<div className="logs">
			<Item date={new Date()} desc={'LeetCode'} time={'1h'}/>
			<Item date={new Date()} desc={'React'} time={'4h'}/>
			<Item date={new Date()} desc={'webpack'} time={'1h'}/>
			<Item date={new Date()} desc={'ES6'} time={'2h'}/>
		</div>
	);
};

export default Logs;
