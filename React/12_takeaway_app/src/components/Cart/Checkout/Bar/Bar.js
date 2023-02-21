import React, {useContext} from 'react';
import CartContext from '../../../../store/cart-context';
import classes from './Bar.module.css';

const Bar = () => {

	const ctx = useContext(CartContext);

	return (
		<div className={classes.Bar}>
			<div className={classes.totalPrice}>{ctx.totalPrices}</div>
			<button className={classes.button}>去支付</button>
		</div>
	);
};

export default Bar;
