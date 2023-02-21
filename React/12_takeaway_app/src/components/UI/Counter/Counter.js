import React, {useContext} from 'react';
import classes from './Counter.module.css';
import CartContext from '../../../store/cart-context';

const Counter = (props) => {

	//使用钩子函数获得context中的数据
	const ctx = useContext(CartContext);
	/*
		添加商品
	 */
	const addMealHandler = () => {
		// props.onAdd(props.meal);
		// ctx.addmel(props.meal);
		ctx.goodsDataDispatch({
			type: 'ADD',
			meal: props.meal
		});
	};

	/*
		删除商品
	 */
	const delMealHandler = () => {
		// props.onDel(props.meal);
		// ctx.delmel(props.meal);
		ctx.goodsDataDispatch({
			type: 'DEL',
			meal: props.meal
		});
	};

	return (
		<div className={classes.Counter}>
			{
				props.meal.count > 0 && props.meal.count && (
					<>
						<button className={classes.Sub} onClick={delMealHandler}>
							<span className={'iconfont icon-jianhao'}></span>
						</button>
						<span className={classes.Number}>{props.meal.count}</span>
					</>)
			}
			<button className={classes.Add} onClick={addMealHandler}>
				<span className={'iconfont icon-jiahao1'}></span>
			</button>
		</div>
	);
};

export default Counter;
