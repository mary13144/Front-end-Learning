import './App.css';
import {useGetStudentsQuery} from './components/store/studentApi';
import StudentList from './components/StudentList/StudentList';


function App() {

	//调用钩子函数获取数据
	/*
		useGetStudentsQuery可以接受一个对象作为第二个参数
			这个参数主要是用来对这个请求进行更加细致化的配置
	 */
	const {data, isSuccess, isFetching} = useGetStudentsQuery(null, {
		/*selectFromResult: res => {
			if (res.data) {
				res.data = res.data.filter(item => item.attributes.age < 28);
			}
			return res;
		},*/   // 用来指定返回的结果
		pollingInterval: 0, //设置轮询的间隔，如果为0则不轮询
		skip: false, //设置是否跳过当前请求，默认为false
		refetchOnMountOrArgChange: false,   //设置是否每次都重新发送请求加载数据 false使用缓存   ture每次重新加载  数字:使用缓存且缓存的有效期为数字
		refetchOnFocus: false,   //设置重新获取焦点时是否重新加载数据
		refetchOnReconnect: false    //设置重新连接后是否重新加载数据
	});


	/*
		RTKQ钩子函数的返回值属性
		currentData: undefined  当前参数的最新数据
		data: undefined     最新加载到的数据
		error:  Error()     错误对象，出现错误时存在
		isError: false  布尔值，请求是否存在错误
		isFetching: true    布尔值，描述数据是否正在加载
		isLoading: true     布尔值，描述数据是否是第一次加载
		isSuccess: false    布尔值，请求是否成功
		isUninitialized: false  布尔值，请求是否还没开始发送
		refetch: ƒ ()   一个函数，用来重新发送请求加载数据
		status: "pending"   字符串，描述请求的状态
	 */

	return (

		<div className="App">
			{
				isFetching && <p>数据加载中</p>
			}
			{
				isSuccess && <StudentList stus={data}/>
			}
		</div>
	);
}

export default App;
