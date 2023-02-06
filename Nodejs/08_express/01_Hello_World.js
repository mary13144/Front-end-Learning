/*
	express 是node的服务器软件
		通过express可以快速的在node中搭建一个web服务器
	使用步骤：
		1.创建并初始步骤：
			npm init -y
		2. 下载express：
			npm install express
		3.创建index.js并编写代码。

 */
// 引入express
const express  =  require('express');

//获取服务器的实例（对象）
const app = express();

/*
	如果希望服务器可以正常访问，则需要为服务器设置路由
		路由可以根据不同的请求方式和请求地址来处理用户的请求
			app.METHOD(....)
				METHOD 可以是个get或post 。。。

	中间件
		在express中我们使用app.use来定义一个中间件
			中间件作用和路由很像，用法很像
			中间件不区分请求的方式只看路径，post、get。。。都会通过中间件

		和路由的区别：
			1.会匹配包含地址所有的请求
			2.路径设置父目录
			3.可以省略路径参数，省略后默认为根目录
 */

app.use("/", (req,res,next)=>{
	console.log("中间件收到请求",Date.now());
	// res.send("这是通过中间件返回的响应");
	// 不能在响应处理完毕后调用next()
	next();
})

/*
	"/"等价与http://localhost:3000，该代码表示有人通过get请求方式访问首页
		回调函数表示服务器后序做出的操作
			回调函数有三个参数
				1.request
				2.response
				3.next  放行，由下一个路由或者中间件处理

 */
app.get("/",(req,res)=>{
	console.log("有人访问首页了!");
	/*
		在路由中应该做两件事
			读取用户的请求（request）
			参数req表示的是用户的请求数据，通过req可以获取用户传递数据


			根据用户的请求返回相应（response）
			res表示服务器发送给客户端的响应信息
				可以通过res来想用户端返回数据
				res.sendStatus(404);向客户端发送响应状态码
				res.status(404);服务器用来设置响应状态码，但是并不发送
				res.send();设置并发送响应体

	 */
	console.log(req.url);

	// res.sendStatus(404);
	res.status(200);
	res.send("请求已收到！")
})



/*
	启动服务器
	app.listen(端口号)用来启动服务器
	服务器启动后可以通过端口号访问服务器
	协议名://ip地址:端口号/路径
	http://localhost:3000
	http://127.0.0.1:3000
 */
app.listen(3000,()=>{
	console.log('服务器已经启动了');
})