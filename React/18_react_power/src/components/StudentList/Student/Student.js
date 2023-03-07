import React, {Fragment, useState} from 'react';
import StudentForm from '../StudentForm/StudentForm';
import {useDelStudentByIdMutation} from '../../../store/api/studentApi';


const Student = ({stu: {id, attributes: {name, age, gender, address}}}) => {

	const [isEdit, setIsEdit] = useState(false);

	const [delStudent, {isSuccess}] = useDelStudentByIdMutation();

	const deleteStuHandler = () => {
		delStudent(id);
	};


	return (
		<Fragment>
			{
				!isEdit && !isSuccess && <tr>
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
				isSuccess && <tr style={{textAlign: 'center'}}>
					<td colSpan={5}>删除成功！</td>
				</tr>
			}

			{
				isEdit && <StudentForm isEdit={isEdit} setIsEdit={setIsEdit} id={id}/>
			}

		</Fragment>

	);
};

export default Student;
