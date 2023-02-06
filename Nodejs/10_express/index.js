const express = require('express');
const path = require('node:path');
const fs = require('node:fs/promises');
const app = express();

const STUDENTS_ARR = require('./data/student.json');


//配置express的模板引擎
app.set('view engine', 'ejs');

//配置模板路径
app.set('views', path.resolve(__dirname, 'views'));

//配置静态资源路径
app.use(express.static(path.resolve(__dirname, 'public')));

//配置请求体解析
app.use(express.urlencoded({extended: true}));

//配置路由
app.get('/students', (req, res) => {
	res.render('students', {studs: STUDENTS_ARR});
});

app.post('/add', (req, res) => {
	//路由里做什么？
	/*
		1.获取用户填写的信息
		2.验证用户信息（略）
		3.讲用户信息添加到数组中
		4.将信息存入文件
		5.返回相应
	 */
	let newpeople = {};
	newpeople.number = STUDENTS_ARR.at(-1).number + 1;
	newpeople.name = req.body.name;
	newpeople.age = parseInt(req.body.age);
	newpeople.gender = req.body.gender;
	newpeople.address = req.body.address;
	STUDENTS_ARR.push(newpeople);
	fs.writeFile(path.resolve(__dirname, './data/student.json'), JSON.stringify(STUDENTS_ARR))
		.then(r => {
			//重定向，告诉游览器向另一个地址发起一次请求
			res.redirect('/students');
		})
		.catch(e => {
			console.log('出现错误！');
		});


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