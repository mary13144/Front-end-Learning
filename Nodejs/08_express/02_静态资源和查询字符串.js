//引入模块
const express = require('express');
const path = require('node:path');
//创建服务器实例
const app = express();


/*
	目前修改完服务器后需要手动重启服务器
		希望有一种方式，可以自动坚实代码的修改
			代码修改完自动重启服务器

	实现这个功能，需要安装一个模块 nodemon
		使用方式：
			1. 全局安装
				npm i nodemon -g
				yarn global add nodemon

				启动:
					nodemon     运行index.js
					nodemon     运行指定的js文件
			2. 在项目中安装
				yarn add nodemon -D
				npm install nodemon -D

				启动:
					npx nodemon     运行index.js
					npx nodemon     运行指定的js文件


		nodemon默认启动项目下的index.js
			否则需用用命令 nodemon xxx文件名启动需要的文件
 */

/*
	服务器中的资源对于外部游览器来说都是不可见的
		所以我们编写的html页面，游览器无法直接访问
		如果希望游览器可以访问，则需要将页面所在的目录设置为静态资源所在的目录

 */

/*
	中间件
	中间件写在路由前面提高优先级
	设置static中间件后，游览器访问时，会自动去public中访问是否有符合需求的静态资源
 */
app.use(express.static(path.resolve(__dirname, './public')));


//配置路由
app.get('/', (req, res) => {
	res.send('服务器已经接受到请求!');
});

app.get('/login', (req, res) => {
	// 获取用户输入的用户名和密码
	//req.query 表示查询字符串中的请求参数

	if (req.query.username === '1427183122' && req.query.password === '123456') {
		res.send('<h1>登陆成功</h1>');
	} else {
		res.send('用户名或密码错误');
	}


	// console.log(req.query);
	// console.log('请求已经收到！');
	// res.send('登陆成功！');
});

//服务器监听
app.listen(3000, () => {
	console.log('服务器已经启动！');
});