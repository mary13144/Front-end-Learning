import React, {useContext, useEffect, useState} from 'react';
import classes from './Cart.module.css';
import Icon from '../../asset/bag.png';
import CartContext from '../../store/cart-context';
import CartDetails from './CartDetails/CartDetails';
import Checkout from './Checkout/Checkout';


const Cart = () => {
	//获取context中的数据
	const ctx = useContext(CartContext);

	//设置变量控制显示购物车详情页面
	const [showDetails, setshowDetails] = useState(false);

	//控制显示购物车详情函数
	const showDetailsHandler = () => {

		if (ctx.totalCount !== 0) {
			setshowDetails(prevState => !prevState);
		}

	};

	//设置变量控制支付页面详情
	const [showCheckout, setshowCheckout] = useState(false);

	//操作显示隐藏支付页函数
	const showCheckoutHeadler = () => {
		if (ctx.totalCount !== 0) {
			setshowCheckout(prevState => !prevState);
		}
	};

	//处理不会消失的bug
	useEffect(() => {
		if (ctx.totalCount === 0) {
			setshowDetails(false);
			setshowCheckout(false);
		}
	}, [ctx.totalCount]);

	return (
		<div className={classes.Cart} onClick={showDetailsHandler}>
			{
				showCheckout && <Checkout onCancel={showCheckoutHeadler}/>
			}
			{
				showDetails && ctx.totalCount !== 0 && <CartDetails/>
			}
			<div className={classes.CartBag}>
				<img src={Icon} alt={'购物车'}/>
				{
					ctx.totalCount === 0 ? null : <span className={classes.CartCount}>{ctx.totalCount}</span>
				}

			</div>
			{
				ctx.totalPrices === 0 ? <p className={classes.noMeals}>未选购商品</p> : <span className={classes.CartPrice}>{ctx.totalPrices}</span>
			}
			<button className={`${classes.CartButton} ${ctx.totalCount === 0 ? classes.disabled : ''}`} onClick={showCheckoutHeadler}>去结算</button>
		</div>
	);
};

export default Cart;
