import React, {useState} from 'react';
import Content from './Content';
import './Item.css';
import Mydate from './Mydate';
import Card from '../UI/Card/Card';
import ConfirmModel from '../UI/ConfirmModel/ConfirmModel';

const Item = (props) => {

	//模态框显示变量
	const [showModel, setShowModel] = useState(false);

	//确认删除
	const confirmDel = () => {
		props.onDelData();
	};

	const onDelete = () => {
		setShowModel(true);
	};

	const cancelDel = () => {
		setShowModel(false);
	};


	/*
		portal:
			- 组件本身是会作为父组件的子元素进行渲染到页面中，
				但是有时候，我们并不希望组件作为父元素的子元素进行渲染，
				因为这种渲染方式可能会带来一些问题，比如层级
			- 可以通过portal将组件渲染到页面中指定的位置
			- 使用方法:
				1.在index.html中添加一个新的元素
				2.修改组件的渲染方式
					- 通过ReactDOM.creatPortal()作为返回值创建元素
					- 参数:
						1.需要渲染的JSX代码
						2.渲染的目标位置
	 */

	return (
		<Card className="item">
			{
				showModel && <ConfirmModel confirmDel={confirmDel} cancelDel={cancelDel}/>
			}
			{/*{左边日期容器}*/}
			<Mydate date={props.date}/>
			{/*{内容}*/}
			<Content desc={props.desc} time={props.time}/>
			{/*删除计划*/}
			<div>
				<div className={'delete'} onClick={onDelete}>×</div>
			</div>
		</Card>

	);
};

export default Item;
