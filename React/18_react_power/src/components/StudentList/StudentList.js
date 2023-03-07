import React from 'react';
import Student from './Student/Student';
import classes from './StudentList.module.css';
import StudentForm from './StudentForm/StudentForm';
import {useGetStudentsQuery} from '../../store/api/studentApi';

const StudentList = () => {

	const {data, isSuccess} = useGetStudentsQuery();


	return (
		<div className={classes.StudentList}>
			<h2 style={{textAlign: 'center'}}>学生列表</h2>
			<table className={classes.StudentTable} style={{textAlign: 'center'}}>
				<thead>
				<tr>
					<th>姓名</th>
					<th>年龄</th>
					<th>性别</th>
					<th>地址</th>
					<th>操作</th>
				</tr>
				</thead>
				<tbody>
				{
					isSuccess && data.map(item => {
						return <Student key={item.id} stu={item}/>;
					})
				}
				</tbody>
				<tfoot>
				<StudentForm/>
				</tfoot>
			</table>
		</div>
	);
};

export default StudentList;
