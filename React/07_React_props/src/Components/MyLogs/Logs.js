import React from 'react';
import Item from './Item';
import './Logs.css';

const Logs = () => {

	//模拟从服务器接受的数据
	const data = [
		{
			id: '001',
			date: new Date(2023, 2, 10, 12, 34),
			desc: 'LeetCode',
			time: '1h'
		}, {
			id: '002',
			date: new Date(2023, 2, 11, 12, 34),
			desc: 'React',
			time: '1h'
		}, {
			id: '003',
			date: new Date(2023, 2, 12, 12, 34),
			desc: 'Vue',
			time: '1h'
		}, {
			id: '004',
			date: new Date(2023, 2, 13, 12, 34),
			desc: 'JavaScript',
			time: '1h'
		}
	];

	//在函数组件中，属性相当于函数的参数，可以通过参数来获取到父组件传递过来的属性值
	//可以在函数组件中定义一个参数(通常为props)，props指向的是一个对象，包含了父组件传递的所有参数
	//参数可以传递任何值包括函数
	const localdate = data.map(item =>
		<Item key={item.id} {...item}/>
	);

	return (
		<div className="logs">
			{
				localdate
			}
		</div>
	);
};

export default Logs;
