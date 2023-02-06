/*
	进程和线程
		— 进程（厂房）
			- 程序运行的环境
		— 线程（工人）
			- 线程是实际进行运算的东西

	同步
		- 通常情况代码都是自上而下一行一行执行的
		- 前边代码不执行后面的代码也不会执行
		- 同步执行会出现阻塞的情况
		- 一行代码执行缓慢会影响整个程序的执行速度

	解决同步问题：
		- java Python
			- 通过多线程解决
		- node.js
			- 通过异步方式解决

	异步
		- 一段代码的执行速度不会影响其他代码的执行
		- 异步的问题
			- 异步的代码没法通过return接收返回值
		- 特点
			- 不会阻塞其他代码的执行
			- 需要通过回调函数来返回结果
		- 基于回调函数的异步带来的问题
			- 代码可读性差
			- 代码调试性差
		- 解决回调函数的问题
			- 需要一个东西代替回调函数返回结果
			- Promise
				- Promise是一个可以用来存储数据的对象
					- Promise存储数据的方式比较特殊，这种特殊的方式使得Promise可以用来存储异步调用的数据
 */


function sum(a, b, cb) {
	setTimeout(() => {
		cb(a + b)
	}, 1000)

}

function sum2(a, b){
	const begin = Date.now()

	// 让程序停10秒
	while(Date.now() - begin < 10000){}
}

console.log("111111")


sum(123, 456, (result)=>{
	sum(result, 7, (result)=>{
		sum(result, 8, result => {
			sum(result, 9, result => {
				sum(result, 10, result => {
					console.log(result)
				})
			})
		})
	})
})


console.log("222222")
