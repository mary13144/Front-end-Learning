import Logs from './Components/MyLogs/Logs';

/*
	如果组件中的数据都是固定不变的，那么这个组件的复用性将会大大降低，难以应对实际需求，
	所以我们希望组件中的各种参数可以像函数一样有由外部传入，这样将会大大提高组件的自由度
	在父组件可以通过props()将参数传递给子组件

 */


const App = () => {
	return <div>
		<Logs/>
	</div>;
};

export default App;