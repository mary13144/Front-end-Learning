import React, {useState} from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css';

const MyComponent = () => {
	/*
		获取表单中用户的输入内容
			在React中，通常表单不需要提交
				而是通过React提交
	 */

	// let inputDate;
	// let inputDesc;
	// let inputTime;
	// let [inputDate, setinputDate] = useState('');
	// let [inputDesc, setinputDesc] = useState('');
	// let [inputTime, setinputTime] = useState('');

	let [formDate, setformDate] = useState({
		inputDate: '',
		inputDesc: '',
		inputTime: ''
	});

	//获取用户在表单中输入的数据
	const inputDateHandler = (e) => {
		// inputDate = e.target.value;
		// setinputDate(e.target.value);
		setformDate({
			...formDate,
			inputDate: e.target.value
		});
	};
	const inputDescHandler = (e) => {
		// inputDesc = e.target.value;
		// setinputDesc(e.target.value);
		setformDate({
			...formDate,
			inputDesc: e.target.value
		});
	};

	const inputTimeHandler = (e) => {
		// inputTime = e.target.value;
		// setinputTime(e.target.value);
		setformDate({
			...formDate,
			inputTime: e.target.value
		});
	};


	/*
		双向绑定:
			将表单中的数据存储到state中，然后设置表单的value值为state
				这样表单发生变化会改变state的值，组件重新渲染
				state的值发生变化也会改变表单项的显示，组件重新渲染
					这就是双向绑定，这样的操作就使得表单成为受控组件
	 */
	const formSubmit = (e) => {
		//在React中提交表单首先应该取消表单的默认提交行为
		e.preventDefault();
		//将获取到的数据整合为一个对象
		const newlog = {
			date: new Date(formDate.inputDate),
			desc: formDate.inputDesc,
			time: +formDate.inputTime
		};
		// setinputDate('');
		// setinputDesc('');
		// setinputTime('');
		setformDate({
			inputDate: '',
			inputDesc: '',
			inputTime: ''
		});


		console.log(newlog);
	};
	return (
		<Card className={'logs-form'}>
			<form onSubmit={formSubmit}>
				<div className={'form-item'}>
					<label htmlFor={'date'}>日期:</label>
					<input onChange={inputDateHandler} id={'date'} value={formDate.inputDate} type="date"/>
				</div>
				<div className={'form-item'}>
					<label htmlFor={'desc'}>内容:</label>
					<input onChange={inputDescHandler} id={'desc'} value={formDate.inputDesc} type="text"/>
				</div>
				<div className={'form-item'}>
					<label htmlFor={'time'}>时长:</label>
					<input onChange={inputTimeHandler} id={'time'} value={formDate.inputTime} type="number"/>
				</div>
				<div className={'form-button'}>
					<button>添加</button>
				</div>
			</form>
		</Card>
	);
};

export default MyComponent;
