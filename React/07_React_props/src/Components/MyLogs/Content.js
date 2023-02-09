import React from 'react';
import './Content.css';

const Content = (props) => {
	return (
		<div className="content">
			{/*{项目介绍}*/}
			<h3 className="desc">
				{
					props.desc
				}
			</h3>
			{/*{时间}*/}
			<div className="time">
				{
					props.time
				}
			</div>
		</div>

	);
};

export default Content;
