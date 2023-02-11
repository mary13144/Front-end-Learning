import React, {useState} from 'react';


const App = () => {
	/*
		在React中，组件渲染完成之后，修改组件中的变量，不会使组件重新渲染
			要使组件中的变量在页面中发生改变就需要对组件重新渲染，此时我们就需要一个特殊的变量
			这个变量在发生变化时会自动重新渲染对应的组件

		state就是React中这样一个特殊的变量，在React中进行了注册
		React会自动监控这个变量，一旦它发生变化，React会自动进行对应组件的重新渲染
		这样我们对于变量的修改自然就会在页面中展现出来

		而如果我们想要获得state这个变量需要用钩子函数去获取(React中钩子函数都是use开头)
			该函数会返回一个数组
				数组中的第一个元素是初始值
					- 初始值仅仅显示数值，直接对初始值进行的修改不会使React重新渲染组件
				数组中的第二个元素是一个函数
					- 这个函数的作用是对初始值state进行修改，通常我们将这个函数命名为setXXX，使用该函数对state进行的修改会触发React对组件进行重新渲染
							并且使用函数传递的值作为state新的值

		State的注意事项，在我们使用setXXX函数对State的值进行修改后，React会对组件进行重新渲染
			- 只有state的值发生了变化，React才会对组件进行重新修改，如果setXXX函数传入的值和原有的state的值相比没有任何变化那么React不会对组件进行重新渲染
			- 如果state的初始值是一个对象，那么我们对原有对象进行属性和方法上的修改并不会对对象本身进行改变，对象本身的改变主要是看其引用地址值
				此时我们可以使用Object.assign()这个函数创建一个新的空对象将原有对象的内容进行浅复制这样自然就让对象发生了改变也会触发React对组件进行重新渲染
						let person = {
						name: '孙悟空',
						age: 18
						};
						Object.assign({}, person);
						let newPerson = {...person,name:'猪八戒'}
			- 当我们通过调用函数setXXX去修改一个state的值时，并不是修改的当前的state的值
				而是修改的setXXX重新渲染的组件中新的state的值
				同时调用setXXX对state进行修改时，setXXX函数是异步执行的，所以在同时修改一个组件中的state值时，在微任务队列中会将所有的setXXX函数进行合并，只执行最后一次的setXXX函数
					在调用setXXX时修改state时，可能出现两次函数调用是基于同一个state的原始值，从而导致state的值出现计算错误
						为了避免这种情况的发生，可以通过在调用setXXX函数时传入回调函数的形式来修改state
							setXXX的回调函数的返回值会成为新的state的值,回调函数执行时会将最新的state作为参数传入回调函数
	 */
	let [counter, setCounter] = useState(1);


	const addHeadler = () => {
		// counter++;
		// console.log(counter);
		// setCounter(++counter);

		setCounter((prevState) => prevState + 1);
	};

	const lessHeadler = () => {
		// counter--;
		// console.log(counter);
		// setCounter(--counter);
		// setTimeout(() => {
		// }, 1000);
		setCounter((prevState) => prevState - 1);
	};

	return (
		<div className={'app  clearfix'}>
			<div className={'counter'}>{counter}</div>
			<button onClick={lessHeadler}>-</button>
			<button onClick={addHeadler}>+</button>
		</div>
	);
};

export default App;
