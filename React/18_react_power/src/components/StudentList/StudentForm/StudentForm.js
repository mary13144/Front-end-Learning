import React, {useEffect, useState} from 'react';
import {useAddStudentMutation, useGetStudentByIdQuery, useUpdateStudentMutation} from '../../../store/api/studentApi';


const StudentForm = (props) => {
	const {data: stuData, isSuccess, isFetching} = useGetStudentByIdQuery(props.id, {
		skip: !props.id,
		refetchOnMountOrArgChange: false
	});

	const [addStudent, {isSuccess: isAddSuccess}] = useAddStudentMutation();

	const [updateStudent, {isSuccess: isUpdateSuccess}] = useUpdateStudentMutation();

	const [formInput, setFormInput] = useState({
		name: '',
		age: 0,
		gender: '男',
		address: ''
	});

	useEffect(() => {
		if (isSuccess) {
			setFormInput(stuData.attributes);
		}
	}, [isSuccess, stuData]);

	const nameHandler = (e) => {
		setFormInput(prevState => {
			return {...prevState, name: e.target.value};
		});
	};

	const ageHandler = (e) => {
		setFormInput(prevState => {
			return {...prevState, age: e.target.value};
		});
	};

	const genderHandler = (e) => {
		setFormInput(prevState => {
			return {...prevState, gender: e.target.value};
		});
	};

	const addressHandler = (e) => {
		setFormInput(prevState => {
			return {...prevState, address: e.target.value};
		});
	};


	const addStudentHandler = () => {
		// console.log(formInput);
		addStudent(formInput);
		setFormInput({
			name: '',
			age: 0,
			gender: '男',
			address: ''
		});
	};

	const updateStudentHandler = () => {
		updateStudent({
			id: props.id,
			attributes: formInput
		});
		props.setIsEdit(false);
	};

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
							<button onClick={updateStudentHandler}>确认</button>
						</> : <button onClick={addStudentHandler}>添加</button>
					}

				</td>
			</tr>
			{
				isFetching && <tr>
					<td colSpan={5}>数据添加中</td>
				</tr>
			}
		</>

	);
};

export default StudentForm;
