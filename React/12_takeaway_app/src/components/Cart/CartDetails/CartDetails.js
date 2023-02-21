import React, {useContext, useState} from 'react';
import classes from './CartDetails.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import CartContext from '../../../store/cart-context';
import Meal from '../../Meals/Meal/Meal';
import Confirm from '../../UI/Confirm/Confirm';

const CartDetails = () => {

	//获取购物车中的数据
	const ctx = useContext(CartContext);
	const Cartdata = ctx.item.map(item => {
		return <Meal key={item.id} meal={item} noDesc={true}/>;
	});

	//设置控制清空购物车的变量
	const [ClearCart, setClearCart] = useState(false);

	//设置模态框显示切换函数
	const showConfirm = () => {
		setClearCart(prevState => !prevState);
	};


	//设置清空购物车函数
	const clearGoods = (e) => {
		// ctx.ClearCart();
		ctx.goodsDataDispatch({
			type: 'Clear'
		});
		setClearCart(false);
	};

	return (
		<Backdrop>
			{
				ClearCart && <Confirm confirmText={'确认清空购物车吗？'} onCancel={showConfirm} onConfirm={clearGoods}/>
			}
			<div className={classes.CartDetails} onClick={e => e.stopPropagation()}>
				<div className={classes.Header}>
					<h2 className={classes.Title}>餐品详情</h2>
					<div className={classes.Clear} onClick={showConfirm}>
						<i className={`iconfont icon-lajitong`}></i>
						<span>清空购物车</span>
					</div>
				</div>
				<div className={classes.CartData}>
					{
						Cartdata
					}
				</div>
			</div>
		</Backdrop>
	);
};

export default CartDetails;
