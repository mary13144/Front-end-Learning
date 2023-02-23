import './App.css';
import StudentList from './components/StudentList/StudentList';
import React, {useCallback, useEffect, useState} from 'react';
import StuContext from './components/store/StuContext';
import useFetch from './hooks/useFetch';


function App() {

	const {data: studata, loading, error, fetchData} = useFetch({url: 'students'});


	useEffect(() => {
		fetchData();
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
