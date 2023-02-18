import React, {useState} from 'react';
import Item from './Item';
import './Logs.css';
import Card from '../UI/Card/Card';
import Logfiter from './Logfilter/Logfiter';

const Logs = (props) => {


	//过滤
	const [year, setYear] = useState(2023);


	let filters = props.data.filter(item => item.date.getFullYear() === year);

	const changeYear = (newYear) => {
		setYear(newYear);
	};

	/*
		当一个数据需要被多个组件使用的时候，我们应该将该数据放在需要使用该数据的多个组件的共同祖先中
		state的提升
	 */
	//在函数组件中，属性相当于函数的参数，可以通过参数来获取到父组件传递过来的属性值
	//可以在函数组件中定义一个参数(通常为props)，props指向的是一个对象，包含了父组件传递的所有参数
	//参数可以传递任何值包括函数
	let localdate = filters.map(item =>
		<Item key={item.id} {...item} onDelData={() => {
			props.onDelitem(item.id);
		}}/>
	);


	//判断localdata中是否还有数据
	localdate = localdate.length !== 0 ? localdate : (<h2 className={'no-logs'}>暂时没有制定学习计划!</h2>);

	/*
		下一步需要将LogsForm中的数据传入App中，然后添加到data中
	 */
	return (
		<Card className="logs">
			<Logfiter year={year} onChangeYear={changeYear}/>
			{localdate}
		</Card>
	);
};

export default Logs;
