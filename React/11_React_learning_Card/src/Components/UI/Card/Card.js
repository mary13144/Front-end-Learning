import React from 'react';
import './Card.css';

const Card = (props) => {
	/*
		props.children 表示的是组件的标签体(即标签之间的内容)
			我们希望组件能够接收其他组件传过来的className，这样就可以在组件中使用这个className
				使用props.className就可以接收到传过来的className
	 */
	// console.log(props.className);
	return (
		<div className={`card ${props.className}`}>
			{props.children}
		</div>
	);
};

export default Card;
