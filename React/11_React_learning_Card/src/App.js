import Logs from './Components/MyLogs/Logs';
import LogsForm from './Components/LogsForm/LogsForm';
import './App.css';
import {useState} from 'react';

const App = () => {

	const [data, setData] = useState([
		{
			id: '001',
			date: new Date(2023, 2, 10, 12, 34),
			desc: 'LeetCode',
			time: 1
		}, {
			id: '002',
			date: new Date(2023, 2, 11, 12, 34),
			desc: 'React',
			time: 2
		}, {
			id: '003',
			date: new Date(2023, 2, 12, 12, 34),
			desc: 'Vue',
			time: 1
		}, {
			id: '004',
			date: new Date(2023, 2, 13, 12, 34),
			desc: 'JavaScript',
			time: 3
		}
	]);

	//保存数据
	const onSaveDataHandler = (newData) => {
		//添加id
		newData.id = new Date() + '';

		setData([
			...data,
			newData
		]);
	};


	//删除计划
	const onDeleteData = (id) => {

		let newData = data.filter(item => item.id !== id);

		setData([...newData]);
	};
	return <div className={'app'}>
		<LogsForm onSaveData={onSaveDataHandler}/>
		<Logs data={data} onDelitem={onDeleteData}/>
	</div>;
};

export default App;