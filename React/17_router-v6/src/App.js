import './App.css';
import {Route, Routes} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import Student from './components/Student';
import Hello from './components/Hello';

function App() {
	return (
		<div className="App">
			<Menu/>
			<Routes>
				{/*
					Routes router v6中新增的组件
					作用和switch类似，都是用于Route的容器
					Routes中只有一个Route会被匹配

					router v6中 component render children都没有了转变为了element
				*/}
				<Route path={'/'} element={<Home/>}/>
				<Route path={'about'} element={<About/>}>
					<Route path={'hello'} element={<Hello/>}/>
				</Route>
				<Route path={'student/:id'} element={<Student/>}/>
			</Routes>
		</div>
	);
}

export default App;
