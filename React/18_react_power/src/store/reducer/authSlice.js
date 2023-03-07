import {createSlice} from '@reduxjs/toolkit';


export const authSlice = createSlice({
	name: 'auth',
	initialState: () => {
		const token = localStorage.getItem('token') ?? null;
		if (token) {
			return {
				isLogin: true,
				token: token,
				user: JSON.stringify(localStorage.getItem('user')),
				expirationTime: +localStorage.getItem('expirationTime')
			};
		}

		return {
			isLogin: false,
			token: null,
			user: null,
			expirationTime: 0
		};
	},
	reducers: {
		login(state, action) {
			state.isLogin = true;
			state.token = action.payload.token;
			state.user = action.payload.user;

			const currentTime = Date.now();
			const timeout = 1000 * 60 * 60 * 24 * 7;
			state.expirationTime = currentTime + timeout;

			localStorage.setItem('token', state.token);
			localStorage.setItem('user', state.user);
			localStorage.setItem('expirationTime', state.expirationTime);
		},
		logout(state, action) {
			state.isLogin = false;
			state.token = null;
			state.user = null;

			localStorage.removeItem('token');
			localStorage.removeItem('user');
			localStorage.removeItem('expirationTime');
		}
	}
});

export const {login, logout} = authSlice.actions;