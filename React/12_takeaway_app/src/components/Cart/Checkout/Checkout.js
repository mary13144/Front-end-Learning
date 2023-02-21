import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import classes from './Checkout.module.css';
import CheckItem from './CheckItem/CheckItem';
import CartContext from '../../../store/cart-context';
import Bar from './Bar/Bar';

const checkoutRoot = document.getElementById('checkout-root');
const Checkout = (props) => {

	//获取购物车中的数据
	const ctx = useContext(CartContext);

	return (
		ReactDOM.createPortal(
			<div className={classes.Checkout}>
				<i className={`iconfont icon-cuowu ${classes.CheckoutCancel}`} onClick={props.onCancel}></i>
				<div className={classes.MealsCheckout}>
					<header className={classes.checkoutHeader}>
						<span>餐品详情</span>
					</header>
					<div className={classes.Meals}>
						{
							ctx.item.map(item => {
								return <CheckItem key={item.id} meal={item}/>;
							})
						}
					</div>
					<footer className={classes.checkoutFooter}>
						<p className={classes.totalPrice}>{ctx.totalPrices}</p>
					</footer>
				</div>
				<Bar/>
			</div>,
			checkoutRoot
		)
	);
};

export default Checkout;
