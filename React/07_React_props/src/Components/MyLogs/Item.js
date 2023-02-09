import React from 'react';
import Date from './Date';
import Content from './Content';
import './Item.css';

const Item = () => {
	return (
		<div className="item">
			{/*{左边日期容器}*/}
			<Date/>
			{/*{内容}*/}
			<Content/>
		</div>

	);
};

export default Item;
