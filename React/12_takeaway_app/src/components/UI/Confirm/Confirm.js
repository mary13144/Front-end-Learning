import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Confirm.module.css';

const Confirm = (props) => {
	return (
		<Backdrop className={classes.ConfirmWrapper} onClick={e => e.stopPropagation()}>
			<div className={classes.Confirm}>
				<p className={classes.ConfirmText}>{props.confirmText}</p>
				<div className={classes.buttonBox}>
					<button className={classes.Cancel} onClick={() => {
						props.onCancel();
					}}>取消
					</button>
					<button className={classes.Ack} onClick={() => {
						props.onConfirm();
					}}>确认
					</button>
				</div>
			</div>
		</Backdrop>
	);
};

export default Confirm;
