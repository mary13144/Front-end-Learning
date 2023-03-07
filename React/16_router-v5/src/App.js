import './App.css';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';

function App() {

	/*
		将路由和组件进行映射
			使用Route组件来映射地址和组件
				属性:
					path    映射的url地址
					component   要挂载的组件
					exact	精确匹配
			当Route的path和浏览器地址栏的地址一致时, Route会将component属性指定的组件挂载到Route标签所在的位置
				注意在默认情况下，Route时模糊匹配的，也就是说只要游览器的url地址中包含了Route的path属性指定的地址
				那么Route就会将component属性指定的组件挂载到Route标签所在的位置，不会检查后续的子路径


	 */


	return (

		<div className="App">
			{/*
                component用来指定路由匹配后被挂载的组件
                    component需要直接传递组件的类
                    通过component构建的组件，它会自动创建组件并且会自动传递参数
                        match -- 匹配的信息
                            isExact 检查路径是否完全匹配
                            params 请求的参数
                        location -- 地址信息
                        history -- 控制页面的跳转
                            push() 跳转页面
                            replace() 替换页面
            */}
			<Menu/>
			<Route exact path={'/'} component={Home}/>
			<Route path={'/about'} component={About}/>
			{/*
                /student/:id 会匹配到 /student/xxx
            */}
			{/*<Route path="/student/:id" component={Student}/>*/}

			{/*
                render 也可以用了指定要挂载的组件
                    render需要一个回调函数作为参数，回调函数的返回值会最终被挂载
                    render不会自动传递三个属性
            */}
			{/*<Route path="/student/:id" render={(routePros)=>{*/}
			{/*    return <Student {...routePros}/>*/}
			{/*}}/>*/}

			{/*
                children 也可以用来指定被挂载的组件
                    用法有两种：
                        1. 和render类似，传递回调函数
                            - 当children设置一个回调函数时，该组件无论路径是否匹配都会挂载
                        2. 可以传递组件
            */}
			{/*<Route path="/student/:id" children={(routeProps)=> <Student {...routeProps}/>}/>*/}
			{/*<Route path="/student/:id" children={<Student/>}/>*/}
			{/*<Route path="/student/:id">*/}
			{/*    <Student/>*/}
			{/*</Route>*/}

			{/*<Route path="/student/:id">*/}
			{/*    {routeProps => <Student {...routeProps}/>}*/}
			{/*</Route>*/}
		</div>
	);
}

export default App;
