const express = require('express');
const path = require('node:path');
const fs = require('node:fs/promises');
const cookie_parser = require('cookie-parser');
const app = express();

const StudentRouter = require('./routes/students');

//配置express的模板引擎
app.set('view engine', 'ejs');

//配置模板路径
app.set('views', path.resolve(__dirname, 'views'));

//配置静态资源路径
app.use(express.static(path.resolve(__dirname, 'public')));

//配置请求体解析
app.use(express.urlencoded({extended: true}));

//配置cookie解析
app.use(cookie_parser());

/*
	Cookie的使用:
		需要安装中间件来使得express可以解析Cookie
			1.安装cookie-parser
				npm install cookie-parser
			2.引入cookie-parser
				const cookie_parser = require('cookie-parser');
			3.设置cookie-parser中间件
				app.use(cookie_parser());
*/
app.get('/login', (req, res) => {
	res.render('login');
});


//登陆
app.post('/user-login', (req, res) => {
	/*
		HTTP协议本身是一个无状态的协议
			服务器无法分别发送请求的客户端是哪一个客户端

		Cookie：
			Cookie是用来解决HTTP协议无状态问题的一种技术
			Cookie的本质是一个报文头
				服务器以响应的方式将Cookie发送给客户端
					客户端接受后就会将Cookie存储，并在下次向服务器发送请求时将Cookie传回
					这样服务器就能辨别发送请求的客户端的身份
	 */
	console.log(req.body);
	const username = req.body.username;
	const password = req.body.password;
	if (username === 'admin' && password === '123456') {
		res.cookie('username', username);
		res.redirect('/student/list');
	} else {
		// res.redirect('/login');
		res.send('<script>alert(\'用户名或密码错误\')</script>');
	}
});


app.use('/student', StudentRouter);

//配置错误路由
//不写路径是为了匹配所有上面没有的情况
app.use((req, res) => {
	res.status(404);
	res.send('<h1>对不起，您访问的地址已被外星人劫持！</h1>');
});

app.listen(3000, () => {
	console.log('服务器已经启动！');
});