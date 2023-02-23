//学生数据切片
import {createSlice} from '@reduxjs/toolkit';

const stuSlice = createSlice({
	name: 'stu',
	initialState: {
		name: '孙悟空',
		age: 18,
		gender: '男',
		address: '花果山'
	},
	reducers: {
		setAddress(state, action) {
			state.address = action.payload;
		},
		setName(state, action) {
			state.name = action.payload;
		},
		setAge(state, action) {
			state.age = action.payload;
		},
		setGender(state, action) {
			state.gender = action.payload;
		}
	}
});


export const {setName, setAge, setGender, setAddress} = stuSlice.actions;
export const {reducer: student} = stuSlice;