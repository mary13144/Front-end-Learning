const express = require('express');
const path = require('node:path');
const fs = require('node:fs/promises');
const cookie_parser = require('cookie-parser');
const session = require('express-session');
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

//配置session组件
app.use(session({
	secret: 'md5'
}));

/*
	Cookie的不足:
		Cookie本身是由服务器创建，游览器保存
			每次游览器访问服务器时都需要将Cookie发送回服务器
			这导致Cookie不能存储过多的数据，否则可能导致访问速度降低
			同时由于Cookie是在游览器客户端保存，有被恶意篡改的风险
		注意:
			一般来说不会在Cookie中存储客户的敏感信息

		为了弥补Cookie的不足，希望:
			将用户的数据同意放在服务器中，
			Cookie中只存储客户的id，每次在访问服务器死只需要将id放在Cookie中发回即可读取到服务器中的数据
			这种技术称之为session（会话）

	Session:
		Session是服务器中的一个对象，这个对象用来存储用户的数据
		每一个session对象都有一个唯一的id，id会通过Cookie的形式发送给客户端
		客户端每次访问时只需将存储有id的Cookie发回即可获取它在服务器中存储的数据
		在express中 可以通过 express-session 组件来实现session
		使用步骤:
			安装
				npm install express-session
			引入
				const session = require('express-session');
			设置为中间件
				app.use(session({
					secret:'md5'
				}));
				secret为配置对象必填参数，可以随便填写一个值作为秘钥
			访问session
				req.session
 */

app.get('/login', (req, res) => {
	res.render('login');
});


//登陆
app.post('/user-login', (req, res) => {

	console.log(req.body);
	const username = req.body.username;
	const password = req.body.password;
	if (username === 'admin' && password === '123456') {

		// res.cookie('username', username);
		req.session.username = username;
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