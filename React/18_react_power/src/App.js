import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import Layout from './components/Layout';
import AuthPage from './pages/AuthPage';
import NeedAuth from './components/NeedAuth';
import useAutoLogout from './hooks/useAutoLogout';
import StudentPage from './pages/StudentPage';

function App() {

	useAutoLogout();

	return (

		<Layout>
			<Routes>
				<Route path={'/'} element={<HomePage/>}/>
				<Route path={'/profile'} element={<NeedAuth><ProfilePage/></NeedAuth>}/>
				<Route path={'/auto-form'} element={<AuthPage/>}/>
				<Route path={'/student'} element={<NeedAuth><StudentPage/></NeedAuth>}/>
			</Routes>
		</Layout>
	);
}

export default App;
