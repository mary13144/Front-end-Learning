const express = require('express');
const path = require('node:path');
const fs = require('node:fs/promises');
const cookie_parser = require('cookie-parser');
const session = require('express-session');
//引入file-store
const FileStore = require('session-file-store')(session);

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
	csrf攻击
		跨站请求伪造
		现在大部分游览器在跨域的情况下都不会自动发送Cookie
			这个设计就是为了避免csrf攻击
		如何解决？
			1.使用referer检查请求来源
			2.使用验证码
			3.尽量使用post的请求（结合token）

		token（令牌）:
			可以创建表单时随机生成一个令牌
				然后将令牌存储到session中，并通过模板发送给用户
				用户在提交表单时必须将token发回进行验证才能进行操作
				（可以用uuid生成token）
 */

//配置session组件
app.use(session({
	store: new FileStore({
		//设置session本地存储路径
		path: path.resolve(__dirname, './sessions'),
		//设置session加密存储
		secret: 'ture'
		//设置session的有效时间 默认一个小时
		// ttl: 100,
		//默认情况下FileStore会每隔一小时清除一次session对象,单位秒
		// reapInterval: 100
	}),
	secret: 'ture'
	//设置Cookie时效
	// cookie: {
	// 	maxAge: 10000
	// }
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

		Session什么情况会失效:
			游览器中的Cookie被清除
			服务器中的session对象没了

		express-session默认是将session对象存在内存当中的，所以服务器一旦重启，session对象会自动重置
			所以在使用session时一般会将session进行持久化操作，一般是写入文件或者存储到数据库

		如何将session写入文件
			引入一个中间件   session-file-store
				A file system-based session store.
			使用方法:
				1.下载模块
					npm install session-file-store
				2.引入
					const FileStore = require('session-file-store')(session);
				3.配置session
					//配置session组件
					app.use(session({
						secret: 'md5',
						store: new FileStore({})
					}));
					file-store是session的配置参数


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
		/*
			此时session是存到了内存当中，还没有立即存入文件当中，
				重定向后session会立即在文件当中查询是否有username字段，但是由于没有立即存入，就会导致第一次登陆失败
					为了解决这个问题需要手动进行一次session存储
						req.session.save()
		 */
		req.session.username = username;
		req.session.save(() => {
			res.redirect('/student/list');
		});
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