import ReactDOM from 'react-dom/client';

/*
	运行react项目的命令
	开发测试：npm react-scripts start
	打包：npm react-scripts build
 */
//创建一个JSX
const app = <div>
	<h1>这是我的一个React项目</h1>
	<p>为了暑假实习开卷!!!!</p>
</div>;

//获取根元素
const root = ReactDOM.createRoot(document.getElementById('root'));

//渲染
root.render(app);