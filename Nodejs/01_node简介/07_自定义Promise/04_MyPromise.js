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
    // 创建一个变量存储OnFulfilled回调函数
    #Fulfilledbacks = [];
    // 创建一个变量存储Rejected回调函数
    #Rejectedbacks = [];

    constructor(executor) {
        executor(this.#resolve.bind(this),this.#reject.bind(this));
    }

    // 私有的resolve() 用来存储成功的数据
    #resolve(value){
        // 禁止被重复修改
        if (this.#state === 0){
            this.#result = value;
            this.#state = PROMISE_STATE.FULFILLED;
            // 当resolve执行时，说明数据已经进来了，需要调用then的回调函数
            queueMicrotask(()=>{
                this.#Fulfilledbacks.forEach(cd=>{
                    cd();
                })
            })
        }

    }

    // 私有的reject() 用来存储拒绝的数据
    #reject(reason){
        if (this.#state === 0){
            this.#result = reason;
            this.#state = PROMISE_STATE.REJECTED;
            // 当rejected执行时，说明数据已经进来了，需要调用then的回调函数
            queueMicrotask(()=>{
                this.#Rejectedbacks.forEach(cd=>{
                    cd();
                })
            })
        }
    }

    then(OnFulfilled,OnRejected){
        // 返回一个新的MyPromise以完成可以链式调用的目的
        return new MyPromise((resolve,reject)=>{
            if (this.#state === PROMISE_STATE.FULFILLED){
                queueMicrotask(()=>{
                    resolve(OnFulfilled(this.#result));
                })
            }else if (this.#state === PROMISE_STATE.REJECTED){
                queueMicrotask(()=>{
                    reject(OnRejected(this.#result));
                })
            }else if (this.#state === PROMISE_STATE.PENDING) {
                /*
					目前来讲，then只能读取已经存储进Promise的数据，
						而不能读取异步存储的数据
				*/
                // 放入微任务队列
                queueMicrotask(()=>{
                    this.#Fulfilledbacks.push(()=>{
                        resolve(OnFulfilled(this.#result));
                    })
                    this.#Rejectedbacks.push(()=>{
                        reject(OnRejected(this.#result));
                    })
                })
            }
        })
    }
}

let test  = new MyPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('测试1');
        reject('错误1');
    },1000)

})

test.then((result)=>{
    console.log('第一次查询',result);
    return '测试2'
},(result)=>{
    console.log('第一次查询',result);
    return '错误2'
}).then((result)=>{
    console.log('第二次查询',result);
    return '测试3'
},(result)=>{
    console.log('第二次查询',result);
    return '错误3'
}).then((result)=>{
    console.log('第三次查询',result);
},(result)=>{
    console.log('第三次查询',result);
})

