import ReactDOM from 'react-dom/client';
import ClassApp from './ClassApp';
// import './index.css';
import FunctionApp from './FunctionApp';

/*
	React组件
		- React组件有两种创建方式
		- 函数式组件
			- 函数式组件就是一个返回JSX的普通函数
				- 函数式组件的名称必须以大写字母开头
		- 类组件
 */

// function App() {
// 	return <div>Hello World</div>;
// }

//获取根元素
const root = ReactDOM.createRoot(document.getElementById('root'));

//渲染
// root.render(<FunctionApp/>);

root.render(<ClassApp/>);