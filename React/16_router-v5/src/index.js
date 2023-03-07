import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';


/*

	HashRouter  会通过url地址中的hash值来进行匹配，使用过程中会有一个#
	BrowserRouter   直接通过url地址进行组件的跳转
		使用过程中和普通的url地址没有区别

	router 可以将url地址和组件进行映射,当我们将项目部署到服务器时
		当用户访问对应的地址时，自动挂载对应的组件
		当我们点击Link构建的链接时，跳转没有进过服务器，全部是在本地客户端进行
		但是当我们点击刷新，或者点击普通a标签的链接时，会向服务器发送请求，但是服务器没有与之对应的请求地址所以会返回404

	解决方案:
		1.使用HashRouter，服务器不会去匹配hash值也就是#后面的内容，所以使用HashRouter后请求将由React处理
		2.修改服务器配置
			以nginx为例，将nginx.conf中的配置信息修改如下:
				location / {
				    root   html;
				    try_files $uri /index.html;
				}

	Router的使用步骤:
		1.安装react-router-dom包
			npm install react-router-dom@5
		2.引入react-router-dom包
			import {BrowserRouter as Router} from 'react-router-dom';
		3.在index.js文件中引入Router组件，并且设置为根组件
			<Router>
				<App/>
			</Router>


 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<App/>
	</Router>
);

