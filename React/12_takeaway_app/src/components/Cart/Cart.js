import React, {useContext, useState} from 'react';
import classes from './Cart.module.css';
import Icon from '../../asset/bag.png';
import CartContext from '../../store/cart-context';
import CartDetails from './CartDetails/CartDetails';


const Cart = () => {
	//获取context中的数据
	const ctx = useContext(CartContext);

	//设置变量控制显示购物车详情页面
	const [showDetails, setshowDetails] = useState(false);

	//控制显示购物车详情函数
	const showDetailsHandler = () => {
		console.log(showDetails);
		if (ctx.totalCount !== 0) {
			setshowDetails(prevState => !prevState);
		}
		console.log(showDetails);
	};
	return (
		<div className={classes.Cart} onClick={showDetailsHandler}>
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

			<button className={`${classes.CartButton} ${ctx.totalCount === 0 ? classes.disabled : ''}`}>去结算</button>
		</div>
	);
};

export default Cart;
