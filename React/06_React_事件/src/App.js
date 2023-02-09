import Logs from './Components/MyLogs/Logs';


const App = () => {
	return <div>
		{/*<Logs/>*/}
		<button onClick={test}>点我一下</button>
		<a href="www.baidu.com" onClick={test}>百度一下 </a>
	</div>;
};

function test(event) {
	event.preventDefault(); //取消默认行为
	event.stopPropagation(); //取消事件的冒泡行为

	/*
		React中绑定事件和原生DOM不同
			事件作为属性直接绑定在对应的DOM上
			事件的命名需要使用驼峰命名法，同时属性值不能直接写执行的代码而是需要以回调函数的方式书写
			另一种方法就是将事件需要执行的函数分离出来然后将函数名作为事件的属性值（不能带括号）

		在React中无法通过 return false的方式取消默认行为

		事件对象：
			React中的事件函数同样有参数event作为事件对象
			和原生DOM中的事件对象不同的是，React中的事件对象是经过React包装后的、
			同时由于事件对象经过包装的原因，导致我们在使用事件对象的时候不在需要考虑事件对象的兼容性问题
	 */
	alert('测试事件绑定');
}

export default App;