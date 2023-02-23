import React, {Fragment, useCallback, useContext, useState} from 'react';
import StuContext from '../../store/StuContext';
import StudentForm from '../StudentForm/StudentForm';
import useFetch from '../../../hooks/useFetch';

const Student = ({stu: {id, attributes: {name, age, gender, address}}}) => {

	// console.log(id);
	// const [loading, setLoading] = useState(false);
	// const [error, setError] = useState(null);
	const [isEdit, setIsEdit] = useState(false);
	const ctx = useContext(StuContext);

	const {loading, error, fetchData} = useFetch({
		url: `students/${id}`,
		method: 'delete'
	}, ctx.fetchData, id, ctx);


	const deleteStuHandler = () => {
		fetchData();
	};


	return (
		<Fragment>
			{
				!isEdit && <tr>
					<td>{name}</td>
					<td>{age}</td>
					<td>{gender}</td>
					<td>{address}</td>
					<td>
						<button onClick={deleteStuHandler}>删除</button>
						<button onClick={() => {
							setIsEdit(true);
						}}>修改
						</button>
					</td>
				</tr>
			}

			{
				isEdit && <StudentForm isEdit={isEdit} setIsEdit={setIsEdit} id={id} name={name} age={age} gender={gender} address={address}/>
			}

			{
				loading && <tr>
					<td colSpan={5}>数据删除中</td>
				</tr>
			}
			{
				error && <tr>
					<td colSpan={5}>删除失败</td>
				</tr>
			}
		</Fragment>

	);
};

export default Student;
