import React from 'react';
import './Mydate.css';

const Mydate = (props) => {
	console.log(props);
	//props是一个只读属性
	const month = props.date.toLocaleString('zh-CN', {month: 'long'});
	const date = props.date.getDate();

	return (
		<div className="date">
			{/*{月份}*/}
			<div className="mouth">
				{
					month
				}
			</div>
			{/*{日期}*/}
			<div className="day">
				{
					date
				}
			</div>
		</div>

	);
};

export default Mydate;
