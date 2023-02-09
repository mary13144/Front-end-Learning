import React from 'react';
import Content from './Content';
import './Item.css';
import Mydate from './Mydate';

const Item = (props) => {
	
	return (
		<div className="item">
			{/*{左边日期容器}*/}
			<Mydate date={props.date}/>
			{/*{内容}*/}
			<Content desc={props.desc} time={props.time}/>
		</div>

	);
};

export default Item;
