//引入模块
const express = require('express');
const path = require('node:path');

//创建服务器实例
const app = express();

//配置静态资源路径
app.use(express.static(path.resolve(__dirname, 'public')));

//引入解析请求体的中间件
app.use(express.urlencoded());

//用数组存储用户信息
const USERS = [
	{
		username: 'admin',
		password: '123456',
		nickname: '管理员'
	}, {
		username: '1427183122',
		password: '1234567',
		nickname: '用户'
	}
];


//  添加登陆功能路由
//  /login --> http://localhost:3000/login
app.get('/login', (req, res) => {
	//获取用户发送的数据
	//通过req.query去查询用户输入的字符串
	if (req.query.username === 'admin' && req.query.password === '123456') {
		res.send('<h1>恭喜！登陆成功</h1>');
	} else {
		res.send('<h1>用户名或密码错误</h1>');
	}
});

//  get请求发送参数的第二种方式
//  /hello/:id 表示当用户访问  /hello/xxx时就会触发 id这个符号可以随意编写
//  在路径中以冒号命名的部分我们称为param，在get请求他可以被解析为请求参数
//  params传参一般不会传递特别复杂的参数，params的思想为约定优于配置
app.get('/hello/:id/:name', (req, res) => {
	//可以通过req.params属性来获取这些参数
	console.log(req.params);
	res.send('<h1>get的第二中发送参数方式</h1>');
});


//处理post请求的路由
app.post('/login', (req, res) => {
	//req.body获取post请求的参数（请求体中的参数）
	//默认情况下express不会解析请求体，需要通过中间件来增加这个功能
	// console.log(req.body);

	const username = req.body.username;
	const password = req.body.password;
	const nickname = '用户';

	USERS.push({
		username,
		password,
		nickname
	});

	console.log(USERS);

	let loginUser = USERS.find((item) => {
		return item.username === username && item.password === password;
	});

	if (loginUser) {
		res.send(`<h1>登陆成功 ${loginUser.nickname}</h1>`);
	} else {
		res.send('<h1>用户名或密码错误</h1>');
	}
	/*	for (const user of USERS) {
			if (user.username === username && user.password === password) {
				res.send(`<h1>登陆成功 ${user.nickname}</h1>`);
				return;
			}
		}
	
		res.send('<h1>用户名或密码错误</h1>');*/


	/*	if (username === 'admin' && password === '123456') {
			res.send('<h1>恭喜！登陆成功</h1>');
		} else {
			res.send('<h1>用户名或密码错误</h1>');
		}*/
});

//服务开始监听
app.listen(3000, () => {
	console.log('服务器启动了');
});