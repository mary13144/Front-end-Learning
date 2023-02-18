import React from 'react';
import Card from '../Card/Card';
import './ConfirmModel.css';
import Backdrop from '../Backdrop/Backdrop';
import ReactDOM from 'react-dom';

const portal_root = document.getElementById('portal_root');
const ConfirmModel = (props) => {

	return ReactDOM.createPortal((
		<Backdrop>
			<Card className={'ConfirmModel'}>
				<div className={'confirmText'}>测试消息</div>
				<div>
					<button id={'yes'} onClick={props.confirmDel}>确认</button>
					<button id={'no'} onClick={props.cancelDel}>取消</button>
				</div>
			</Card>
		</Backdrop>
	), portal_root);

};


export default ConfirmModel;