import {useCallback, useState} from 'react';

export default function useFetch(...args) {
	const [data, setData] = useState([]);

	//添加一个变量来记录数据是否正在加载，false为没有加载，ture为正在加载
	const [loading, setloading] = useState(false);


	//添加一个变量来判断是否与服务器链接异常
	const [error, setError] = useState(null);


	//url:'http://localhost:1337/api/students'
	const fetchData = useCallback(async (url, method = 'get', body, headers) => {
		try {
			setloading(true);
			setError(null);
			const res = await fetch(url, {
				method: method,
				body: body,
				headers: headers
			});
			if (res.ok) {
				const data = await res.json();
				setData(data.data);
			} else {
				throw new Error('数据接收异常');
			}
		} catch (e) {
			setError(true);
		} finally {
			setloading(false);
		}
	}, [args]);

	return {
		data,
		loading,
		error,
		fetchData
	};
};