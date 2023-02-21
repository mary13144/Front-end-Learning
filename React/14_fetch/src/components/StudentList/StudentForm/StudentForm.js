import React, {useCallback, useContext, useReducer, useState} from 'react';
import StuContext from '../../store/StuContext';
import './StudentForm.css';

const formInputReducer = (prestate, action) => {
	switch (action.type) {
		case 'NAME': {
			return {...prestate, name: action.name};
		}
		case 'AGE': {
			return {...prestate, age: +action.age};
		}
		case 'GENDER': {
			return {...prestate, gender: action.gender};
		}
		case 'ADDRESS': {
			return {...prestate, address: action.address};
		}
		default: {
			return prestate;
		}
	}
};

const StudentForm = (props) => {
	const [formInput, formInputDispatch] = useReducer(formInputReducer, {
		name: props.isEdit ? props.name : '',
		age: props.isEdit ? props.age : 0,
		gender: props.isEdit ? props.gender : '男',
		address: props.isEdit ? props.address : ''
	});

	const nameHandler = (e) => {
		formInputDispatch({
			type: 'NAME',
			name: e.target.value.trim()
		});
		// console.log(formInput);
	};

	const ageHandler = (e) => {
		formInputDispatch({
			type: 'AGE',
			age: e.target.value
		});
	};

	const genderHandler = (e) => {
		formInputDispatch({
			type: 'GENDER',
			gender: e.target.value.trim()
		});
	};

	const addressHandler = (e) => {
		formInputDispatch({
			type: 'ADDRESS',
			address: e.target.value.trim()
		});
	};

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const ctx = useContext(StuContext);
	const submitHandler = useCallback(async () => {
		try {
			setLoading(true);
			setError(null);
			const resStu = await fetch('http://localhost:1337/api/students', {
				method: 'post',
				body: JSON.stringify({data: formInput}),
				headers: {
					'Content-type': 'application/json'
				}
			});
			if (!resStu.ok) {
				throw new Error('数据添加失败');
			}
			ctx.fetchData('http://localhost:1337/api/students');
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	}, [formInput, ctx]);


	const updateHandler = useCallback(async () => {
		try {
			setLoading(true);
			setError(null);
			const resStu = await fetch(`http://localhost:1337/api/students/${props.id}`, {
				method: 'put',
				body: JSON.stringify({data: formInput}),
				headers: {
					'Content-type': 'application/json'
				}
			});
			if (!resStu.ok) {
				throw new Error('数据修改失败');
			}
			ctx.fetchData('http://localhost:1337/api/students');
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	}, [formInput, ctx, props]);
	return (
		<>
			<tr>
				<td><input onChange={nameHandler} value={formInput.name} type="text"/></td>
				<td><input onChange={ageHandler} value={formInput.age} type="number"/></td>
				<td>
					<select onChange={genderHandler} value={formInput.gender}>
						<option value="男">男</option>
						<option value="女">女</option>
					</select>
				</td>
				<td><input onChange={addressHandler} value={formInput.address} type="text"/></td>
				<td>
					{
						props.isEdit ? <>
							<button onClick={() => {
								props.setIsEdit(false);
							}}>取消
							</button>
							<button onClick={updateHandler}>确认</button>
						</> : <button onClick={submitHandler}>添加</button>
					}

				</td>
			</tr>
			{
				loading && <tr>
					<td colSpan={5}>数据添加中</td>
				</tr>
			}
			{
				error && <tr>
					<td colSpan={5}>添加失败</td>
				</tr>
			}
		</>

	);
};

export default StudentForm;
