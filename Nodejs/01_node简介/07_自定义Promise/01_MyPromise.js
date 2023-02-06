/*
    定义类的思路
        1. 先把功能都分析清楚了，在动手
        2. 写一点想一点，走一步看一步
*/

// Promise状态标志对象
const PROMISE_STATE = {
	PENDING:0,
	FULFILLED:1,
	REJECTED:2
}

class MyPromise {
	// 状态位记录Promise是否已经存储过数据
	#state = PROMISE_STATE.PENDING;
	// 存储Promise的数据
	#result;


	constructor(executor) {
		executor(this.#resolve.bind(this),this.#reject.bind(this));
	}

	#resolve(value){
		// 禁止被重复修改
		if (this.#state === 0){
			this.#result = value;
			this.#state = PROMISE_STATE.FULFILLED;
		}
	}

	#reject(reason){
		if (this.#state === 0){
			this.#result = reason;
			this.#state = PROMISE_STATE.REJECTED;
		}
	}

	then(OnFulfilled,OnRejected){
		if (this.#state === PROMISE_STATE.FULFILLED){
			OnFulfilled(this.#result);
		}else if (this.#state === PROMISE_STATE.REJECTED){
			OnRejected(this.#result);
		}
	}
}

let test  = new MyPromise((resolve,reject)=>{
	// resolve('测试');
	reject('错误');
})

test.then((result)=>{
	console.log(result);
},(result)=>{
	console.log(result);
})