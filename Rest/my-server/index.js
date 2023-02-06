const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

//请求体解析
app.use(express.urlencoded({
	extended: true
}));

//解析json格式的请求体
app.use(express.json());

let STU_ARR = [
	{
		id: '1',
		name: '孙悟空',
		age: 18,
		gender: '男',
		address: '花果山'
	},
	{
		id: '2',
		name: '猪八戒',
		age: 28,
		gender: '男',
		address: '高老庄'
	},
	{
		id: '3',
		name: '沙和尚',
		age: 38,
		gender: '男',
		address: '流沙河'
	}
];

app.use((req, res, next) => {
	//设置响应头
	//Access-Control-Allow-Origin  允许的请求地址 设置指定值时只能设置一个
	//Access-Control-Allow-Methods 允许的请求方式
	//Access-Control-Allow-Headers 允许传递的请求头
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Content-type,authorization');
	next();
});

//测试接口
app.get('/test', (req, res) => {

});

//登陆路由
app.post('/login', (req, res) => {
	const {username, password} = req.body;
	if (username === 'admin' && password === '123123') {
		//登陆成功
		const token = jwt.sign({
			id: '0',
			name: 'admin',
			nickname: '超级管理员'
		}, 'mwx19991225', {
			expiresIn: '1h'
		});

		return res.send({
			state: 'ok',
			data: {
				token,
				nickname: '超级管理员'
			}
		});
	}

	return res.status(403).send({
		state: 'error',
		data: '用户名或密码错误'
	});
});

//获取学生信息
app.get('/students', (req, res) => {
	console.log('收到students的GET请求');
	try {
		const token = req.header('authorization').slice(7);
		const decodeData = jwt.verify(token, 'mwx19991225');
		console.log(decodeData);
		return res.send({
			state: 'ok',
			data: STU_ARR
		});
	} catch (e) {
		console.log('无法解析token' + e);
		res.status(403).send({
			state: 'error',
			data: 'token无效'
		});
	}

});


//添加学生信息
app.post('/students', (req, res) => {
	console.log('收到添加学生信息的POST请求', req.body);
	const name = req.body.name;
	const age = +req.body.age;
	const gender = req.body.gender;
	const address = req.body.address;
	STU_ARR.push({
		id: +STU_ARR.at(-1).id + 1 + '',
		name,
		age,
		gender,
		address
	});
	return res.send({
		state: 'ok',
		data: STU_ARR
	});
});

//根据学生id，删除学生信息
app.delete('/students', (req, res) => {
	console.log('服务器收到删除学生信息的请求');
	const id = req.body.id;
	STU_ARR = STU_ARR.filter(item => item.id !== id);
	return res.send({
		state: 'ok',
		data: STU_ARR
	});
});

//定义一个修改学生的路由
app.put('/students', (req, res) => {
	console.log('服务器收到修改学生信息请求');
	const id = req.body.id;
	const name = req.body.name;
	const age = +req.body.age;
	const gender = req.body.gender;
	const address = req.body.address;
	STU_ARR.forEach(item => {
		if (item.id === id) {
			item.name = name;
			item.age = age;
			item.gender = gender;
			item.address = address;
			return res.send({
				state: 'ok',
				data: STU_ARR
			});
		}
	});

	return res.status(403).send({
		state: 'error',
		data: '操作错误'
	});

});

//根据id查询某个学生的路由
app.get('/students/:id', (req, res) => {
	console.log('服务器已经收到查询某个学生信息的请求', req.params);
	const id = req.params.id;
	const data = STU_ARR.find(item => item.id === id);
	return res.send({
		state: 'ok',
		data: data
	});
});

app.listen(3000, () => {
	console.log('服务器已经启动');
});