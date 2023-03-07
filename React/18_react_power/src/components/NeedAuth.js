import React from 'react';
import {useSelector} from 'react-redux';
import {Navigate, useLocation} from 'react-router-dom';

const NeedAuth = (props) => {
	const {isLogin} = useSelector(state => state.auth);

	const location = useLocation();

	return (
		isLogin ? props.children : <Navigate to={'/auto-form'} state={{preLocation: location}}/>
	);
};

export default NeedAuth;
