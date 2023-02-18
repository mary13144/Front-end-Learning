import React from 'react';
import './Backdrop.css';


const Backdrop = (props) => {
	return (
		<div className={'Backdrop'}>
			{
				props.children
			}
		</div>
	);
};

export default Backdrop;
