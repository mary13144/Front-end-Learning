import React, {Fragment, useCallback, useContext, useState} from 'react';
import StuContext from '../../store/StuContext';
import StudentForm from '../StudentForm/StudentForm';

const Student = ({stu: {id, attributes: {name, age, gender, address}}}) => {

	console.log(id);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [isEdit, setIsEdit] = useState(false);
	const ctx = useContext(StuContext);

	const deleteStu = useCallback(async () => {
		try {
			setLoading(true);
			setError(null);
			const delres = await fetch(`http://localhost:1337/api/students/${id}`, {
				method: 'delete'
			});
			if (!delres.ok) {
				throw new Error('删除失败');
			}
			ctx.fetchData('http://localhost:1337/api/students');
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}

	}, [id, ctx]);


	return (
		<Fragment>
			{
				!isEdit && <tr>
					<td>{name}</td>
					<td>{age}</td>
					<td>{gender}</td>
					<td>{address}</td>
					<td>
						<button onClick={deleteStu}>删除</button>
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
