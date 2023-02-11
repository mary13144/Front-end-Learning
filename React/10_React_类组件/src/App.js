/*
	webstorm
	rsc 快速生成函数组件模版(不带props)
	rsi 快速生成函数组件模版(带props)
	rcc 快速生成类组件模版
 */

import React, {Component} from 'react';
import List from './component/list';

class App extends Component {
	render() {
		return (
			<div className={'app counter'}>
				<List name={'猪八戒'} age={18} gender={'男'}/>
			</div>
		);
	}
}

export default App;
