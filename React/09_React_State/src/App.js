import React, {useRef, useState} from 'react';


const App = () => {

	/*
		获取原生DOM对象的方法:
			1. 可以是使用传统的document来获取原生DOM对象进行操作
			2. 直接从React方法中获取
				获取步骤:
					1. 创建一个DOM对象的容器
						使用钩子函数useRef()
							钩子函数注意事项:
								1. 钩子函数必须在函数组顶层或者自定义钩子函数中使用
								2. 钩子函数必须以use开头
								3. 钩子函数都是直接调用的
					2. 将DOM对象存储到容器中
						将容器设置为想要获取DOM对象元素的ref属性值，React会自动将该元素的原生DOM对象存储到容器中

				useRef()钩子函数的返回值:
					返回值就是一个普通的JS对象，该对象有一个current属性，用来存储DOM对象
					所以我们自己创建一个类似的对象也可以实现相同的功能，用来存储DOM对象
					但是使用useRef()钩子函数和自己创建的对象有一个区别:
						自己创建的对象在每次React组件重新渲染时，都会重新创建一个新的对象，而钩子函数useRef()创建的容器对象只会创建一次，后续每次重新渲染时，都会使用同一个对象
							这样做的好处是:
								1. 可以减少内存的占用
								2. 可以减少垃圾回收的次数，提高性能

						当你需要一个对象来存储数据，而且这个对象在组件重新渲染时，不需要重新创建，那么就可以使用useRef()钩子函数来创建一个对象容器

	 */

	let container = useRef();
	let onclickHandler = () => {
		console.log(container);
	};
	return (
		<div className={'app  clearfix'}>
			<h1 id={'test'} ref={container}>我是标题</h1>
			<button onClick={onclickHandler}>-</button>
			<button>+</button>
		</div>
	);
};

export default App;
