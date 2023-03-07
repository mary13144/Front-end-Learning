import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {logout} from '../store/reducer/authSlice';

const useAutoLogout = () => {
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();


	useEffect(() => {
		const currentTime = Date.now();
		const timeOut = auth.expirationTime - currentTime;
		if (timeOut < 60000) {
			dispatch(logout());
			return;
		}

		const timer = setTimeout(() => {
			dispatch(logout());
		}, timeOut);

		return () => {
			clearTimeout(timer);
		};
	}, [auth, dispatch]);
};


export default useAutoLogout;