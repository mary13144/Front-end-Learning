import React from 'react';
import classes from './Backdrop.module.css';
import ReactDOM from 'react-dom';

const backdroproot = document.getElementById('backdrop-root');
const Backdrop = (props) => {
	return (
		ReactDOM.createPortal(
			<div {...props} className={`${classes.backdrop} ${props.className}`}>
				{props.children}
			</div>,
			backdroproot
		)
	);
};

export default Backdrop;
