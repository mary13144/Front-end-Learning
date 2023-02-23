//使用RTK来构建store
import {configureStore} from '@reduxjs/toolkit';
import {student} from './student';
import {school} from './school';

//使用createSlice创建reducer切片
/*
	createSlice需要一个options配置对象作为参数
		initialState   作为state的初始值
		name    用来作为自动生成type的前缀
		reducer
 */


const store = configureStore({
	reducer: {
		stuReducer: student,
		schReducer: school
	}
});


export default store;