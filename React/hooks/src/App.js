import './App.css';
import {useReducer} from 'react';

function App() {

	/*
		useEffect() 是一个副作用钩子，它可以让你在函数组件中执行副作用操作。
		  useEffect() 接收一个包含命令式、可能有副作用代码的函数。
				这个函数会在组件渲染到屏幕之后执行。
				默认情况下，它在每次渲染之后都会执行，包括第一次渲染。
				你可以选择让 effect 在仅在某些值改变时才执行。
				为此，你可以将一个数组作为 useEffect() 的第二个可选参数。
				如果数组为空，effect只会在组件卸载时执行。
				这个数组中的每个值都会与上一次渲染时的值进行比较。
				如果有任何一个值发生了变化，effect 就会被执行。
				这个函数的返回值是可以作为一个清除函数的可选值。
				如果你的 effect 返回了一个函数，React 将会在执行下次effect时调用它。
				React 会在执行当前 effect 之前对上一个 effect 进行清除。
	 */

	/*
			useRuducer() 是一个接收当前状态和要处理的 action 作为参数的函数，并返回新的状态的函数。
				它与 useState() 的唯一区别是它接收一个包含当前状态和要处理的 action 的函数，而不是一个状态值。
				它有三个参数：
					1.reducer：一个接收当前状态和要处理的
					2.action 作为参数的函数，并返回新的状态的函数。
					3.init 用于初始化 state 的值。
	 */

	/*
			React.memo() 是一个高阶组件。
				  它与 React.PureComponent 非常相似，
				  但它适用于函数组件，而不仅仅是 class 组件。
				  如果你的函数组件在给定相同 props 的情况下渲染相同的结果，
				  那么你可以通过将其包装在 React.memo 中调用，
				  以此通过记忆组件渲染结果的方式来提高组件的性能表现。
				  这意味着在这种情况下，
				  React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。
				  所以，React.memo 只会在 props 发生变化时才重新渲染组件。其实就是一个性能优化的手段。
	 */

	/*
			useCallback() 会返回一个 memoized 回调。
			   将其传递给依赖项数组中的元素发生变化时才会更新的子组件时，
				  它将非常有用，因为这可以避免在每次渲染时都创建该函数。
				  这是因为在这种情况下，父组件将始终传递一个新的回调函数给子组件。
				  这可能会导致子组件进行不必要的重新渲染。
				  你可以通过将函数作为依赖项传递给 useCallback() 来避免这种情况，
				  这样它就只会在某个依赖项改变时才更新。
				  如果依赖项数组为空 ，则回调函数将仅在组件卸载时更新。
	 */
	return (
		<div className="App">

		</div>
	);
}

export default App;
