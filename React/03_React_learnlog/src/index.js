import ReactDOM from 'react-dom/client';
import './index.css';

//创建一个外部容器react元素
const app = <div className="logs">
	{/*{内部每一项事件的小容器}*/}
	<div className="item">
		{/*{左边日期容器}*/}
		<div className="date">
			{/*{月份}*/}
			<div className="mouth">
				四月
			</div>
			{/*{日期}*/}
			<div className="day">
				19
			</div>
		</div>
		{/*{内容}*/}
		<div className="content">
			{/*{项目介绍}*/}
			<h3 className="desc">
				学习React
			</h3>
			{/*{时间}*/}
			<div className="time">
				4h
			</div>
		</div>
	</div>
	
</div>;


//获取根元素
const root = ReactDOM.createRoot(document.getElementById('root'));

//渲染
root.render(app);