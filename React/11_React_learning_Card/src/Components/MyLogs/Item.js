import React from 'react';
import Content from './Content';
import './Item.css';
import Mydate from './Mydate';
import Card from '../UI/Card/Card';

const Item = (props) => {

	return (
		<Card className="item">
			{/*{左边日期容器}*/}
			<Mydate date={props.date}/>
			{/*{内容}*/}
			<Content desc={props.desc} time={props.time}/>
		</Card>

	);
};

export default Item;
