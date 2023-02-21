import './App.css';
import StudentList from './components/StudentList/StudentList';
import React, {useCallback, useEffect, useState} from 'react';
import StuContext from './components/store/StuContext';
import useFetch from './hooks/useFetch';


function App() {

	const {data: studata, loading, error, fetchData} = useFetch()

	// useEffect(() => {
	// 	setloading(true);
	//
	// 	//fetch
	// 	fetch('http://localhost:1337/api/students')
	// 		.then(res => {
	// 			if (res.ok) {
	// 				//res.josn()把返回的数据转换为json格式并且返回值为promise形式
	// 				return res.json();
	// 			}
	// 			throw new Error('数据接收异常');
	// 		})
	// 		.then(res => {
	// 			// console.log(res);
	// 			setStudata(res.data);
	//
	// 			setloading(false);
	// 		})
	// 		.catch((e) => {
	// 			setloading(false);
	// 			setError(e);
	// 		});
	// }, []);


	useEffect(() => {
		fetchData('http://localhost:1337/api/students');
	}, []);

	return (
		<StuContext.Provider value={{fetchData}}>
			<div className="App">
				{
					(!loading && !error) && <StudentList stus={studata}/>
				}
				{
					loading && <p>数据正在加载中。。。请稍后</p>
				}
				{
					error && <p>数据接收异常</p>
				}
			</div>
		</StuContext.Provider>

	);
}

export default App;
