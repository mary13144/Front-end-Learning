import React from 'react';
import classes from 'App.module.css';

const App = () => {
	/*
		CSS模块
			使用步骤:
				1. 创建一个xxx.module.css的文件
				2. 引入文件，给文件赋一个变量名
					import classes from 'App.module.css';
				3. 通过变量名为想要的元素设置样式
					className={classes.p}

		React.Fragment
			- 是一个专门用来作为父容器的组件
				它会将里面的元素直接返回不会创建任何多余的元素
	 */

	return (
		<React.Fragment>
			<p className={classes.p}>测试css模块</p>
		</React.Fragment>
	);
};

export default App;
