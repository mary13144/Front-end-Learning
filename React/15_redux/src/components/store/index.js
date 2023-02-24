import {configureStore} from '@reduxjs/toolkit';
import studentApi from './studentApi';
import {setupListeners} from '@reduxjs/toolkit/query';


const store = configureStore({
	reducer: {
		[studentApi.reducerPath]: studentApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(studentApi.middleware)
});

/*
	设置监听器，设置之后store将会支持以下两个参数
		refetchOnFocus

 */
setupListeners(store.dispatch)
export default store;