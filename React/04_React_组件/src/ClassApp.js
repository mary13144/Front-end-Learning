import React from 'react';

/*
     类组件必须要继承React.Component
        相较于函数组件类组件的编写要麻烦一些，但是他们的功能是一样的
 */
class App extends React.Component {

	//类组件中，必须添加一个render（）方法，且返回值是一个JSX元素
	render() {
		return <div>我是一个类组件</div>;
	}
}


export default App;