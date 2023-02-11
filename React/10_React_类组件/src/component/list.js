import React, {Component} from 'react';

class List extends Component {
	/*
		类组件的props是存储在实例对象的props属性上的
			可以通过this.props获取
		类组件的state也是同一存储在实例对象的state属性上的
			可以通过this.state获取
			可以通过this.setState()修改
				当我们通过this.setState()修改属性时，只会修改我们传入对象中包含的属性
					但是仅限于直接存储于state中的值，如果是对象这类存入的引用地址，那么修改对象这种属性时需要将所有原有属性传入，没有传入的属性就会消失

		在函数式组件中，对于事件的响应函数，我们是直接通过函数的形式定义在组件当中
			而在类组件中，对于事件的响应函数，我们是通过类的方法的形式定义在组件当中

		获取DOM对象:
			1. 创建存储DOM对象的容器
				let divref = React.createRef()
			2. 将想要获得的目标DOM对象的属性ref设置为divref
	 */

	state = {
		count: 0
	};

	//注意方法使用箭头函数 this才是类
	addcountHandler = () => {
		setTimeout(() => {
			this.setState(prevState => {
				return {
					count: prevState.count + 1
				};
			});
		}, 1000);
	};

	render() {
		return (
			<div>
				<ul>
					<li>{this.state.count}</li>
					<li>{this.props.name}</li>
					<li>{this.props.age}</li>
					<li>{this.props.gender}</li>
				</ul>
				<button onClick={this.addcountHandler}>+</button>
			</div>
		);
	}
}

export default List;