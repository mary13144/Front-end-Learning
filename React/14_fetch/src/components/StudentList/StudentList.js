import React from 'react';
import Student from './Student/Student';
import classes from './StudentList.module.css';
import StudentForm from './StudentForm/StudentForm';

const StudentList = (props) => {
	return (
		<div className={classes.StudentList}>
			<table className={classes.StudentTable}>
				<caption>学生列表</caption>
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
					props.stus.map(item => {
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
