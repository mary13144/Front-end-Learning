const express = require('express');
const path = require('node:path');
const fs = require('fs/promises');

let STUDENTS_ARR = require('../data/student.json');
/*
	Router是一个路由--------子服务
		将不同的目录对应到不同的模块
 */
const router = express.Router();

router.use((req, res, next) => {
	if (req.session.username) {
		next();
	} else {
		res.redirect('/login');
	}
});

//配置路由
router.get('/list', (req, res) => {

	res.render('students', {studs: STUDENTS_ARR, username: req.session.username});

});

//退出登陆
router.get('/logout', (req, res) => {
	req.session.destroy(() => {
		res.redirect('/login');
	});
});

//添加
router.post('/add', (req, res, next) => {
	//路由里做什么？
	/*
		1.获取用户填写的信息
		2.验证用户信息（略）
		3.讲用户信息添加到数组中
		4.将信息存入文件
		5.返回相应
	 */
	let newpeople = {};
	if (STUDENTS_ARR.length === 0) {
		newpeople.number = 1;
	} else {
		newpeople.number = STUDENTS_ARR.at(-1).number + 1;
	}
	newpeople.name = req.body.name;
	newpeople.age = parseInt(req.body.age);
	newpeople.gender = req.body.gender;
	newpeople.address = req.body.address;
	STUDENTS_ARR.push(newpeople);
	next();
});


//删除
router.get('/del', (req, res, next) => {
	/*
		删除
			点击删除链接后，删除当前数据
			点击孙悟空删除 --> 删除number为1的学生
			流程：
				1.点击孙悟空的删除链接
				2.向服务器发送请求（写一个路由）
				3.路由如何实现？
					获取学生number
					删除number为目标数值的学生
					将新的数组写入文件
					重新定向学生列表页面
	 */
	//查询字符串传入服务器的为字符串需要转换为数值类型
	const targetnumber = parseInt(req.query.number);
	// console.log(targetnumber);
	STUDENTS_ARR = STUDENTS_ARR.filter(stud => stud.number !== targetnumber);
	// console.log(STUDENTS_ARR);
	next();
});

//修改
router.get('/change', (req, res, next) => {
	/*
		修改:
			点击修改连接后，显示一个表单，表单中应该有要修改的学生信息，
			用户对于学生信息进行修改，修改以后点击按钮提交表单
		流程：
			1.点击孙悟空的修改连接
			2.跳转到一个路由
				路由返回一个页面，页面中有一个表单，表单中应该显示选中学生的各种信息
			3.在新的表单页面修改信息并提交
			4.将修改后的信息存入json文件
	 */
	let targetnumber = parseInt(req.query.number);
	// console.log(targetnumber);
	let targetstudent = STUDENTS_ARR.find(stud => stud.number === targetnumber);
	// console.log(targetstudent);
	res.render('update', {stud: targetstudent});

});

router.post('/update', (req, res, next) => {

	// console.log(req.body);
	let {number, name, age, gender, address} = req.body;
	// console.log(number, name, age, gender, address);
	age = parseInt(age);
	number = parseInt(number);
	let targetstudent = STUDENTS_ARR.find(stud => stud.number === number);
	targetstudent.name = name;
	targetstudent.age = age;
	targetstudent.gender = gender;
	targetstudent.address = address;
	// console.log(STUDENTS_ARR);
	next();
});

router.use((req, res) => {
	fs.writeFile(path.resolve(__dirname, '../data/student.json'), JSON.stringify(STUDENTS_ARR))
		.then(() => {
			//重定向，告诉游览器向另一个地址发起一次请求
			res.redirect('/student/list');
		})
		.catch(e => {
			console.log('出现错误！');
		});
});


module.exports = router;
