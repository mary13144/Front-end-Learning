const express = require('express');
const path = require('node:path');

const app = express();


//配置express的模板引擎
app.set('view engine', 'ejs');

//配置模板路径
app.set('views', path.resolve(__dirname, 'views'));

//配置静态资源路径
app.use(express.static(path.resolve(__dirname, 'public')));

//配置请求体解析
app.use(express.urlencoded({extended: true}));

//配置路由
app.get('/hello', (req, res) => {
	res.send('欢迎！');
});

app.get('/students', (req, res) => {
	//希望用户在访问这个路由时，能够显示一个有学生信息的页面，学生信息根据数组实时改变
	/*
		html页面属于静态页面，创建页面的时候是什么样子，用户看到的就是什么样子
			不会随着服务器中的资源改变而改变

		而在node中存在模板，是一个网页，可以嵌入参数，node中存在很多的模板引擎，都各有各的特点
			EJS是其中一个，语法和jsp类似
				使用步骤：
					1.下载EJS
					2.配置express的模板引擎为EJS
					3.配置模板路径    app.set('views', path.resolve(__dirname, 'views'));
					4.模板引擎需要被express渲染后才能使用
	 */

	//res.render() 用来渲染模板引擎，并返回给游览器
	//res.render() 的第二个参数可以传递一个对象，模板可以访问到对象中的数据
	/*
		<%= %> 在ejs中输出的时候会自动对特殊符号进行转义 &;等
			这个设计主要是为了防止xss注入
		<%- %> 这个是原样输出，可以让代码在前端展示效果
		<%  %> 这个可以输出js代码
	 */
	// res.render('students',{hello:'<h1>我是h1标签</h1>'})
	res.render('students', {name: '孙悟空', age: 18});

});


//配置错误路由
//不写路径是为了匹配所有上面没有的情况
app.use((req, res) => {
	res.status(404);
	res.send('<h1>对不起，您访问的地址已被外星人劫持！</h1>');
});

app.listen(3000, () => {
	console.log('服务器已经启动！');
});