import {createSlice} from '@reduxjs/toolkit';


const schSlice = createSlice({
	name: 'sch',
	initialState: {
		name: '葛洲坝中学',
		address: '宜昌市西陵区'
	},
	reducers: {
		setName(state, action) {
			state.name = action.payload;
		},
		setAddress(state, action) {
			state.address = action.payload;
		}

	}
});

export const {setName, setAddress} = schSlice.actions;
export const {reducer: school} = schSlice;