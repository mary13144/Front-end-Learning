import React from 'react';
import Counter from '../../../UI/Counter/Counter';
import classes from './CheckItem.module.css';

const CheckItem = (props) => {
	return (
		<div className={classes.ChickItem}>
			<div className={classes.ChickItemImg}>
				<img src={props.meal.img} alt="汉堡"/>
			</div>
			<div className={classes.ChickItemDesc}>
				<h2 className={classes.Title}>{props.meal.title}</h2>
				<div className={classes.ChickItemPrice}>
					<Counter meal={props.meal}/>
					<div className={classes.Price}>{props.meal.price * props.meal.count}</div>
				</div>
			</div>
		</div>
	);
};

export default CheckItem;
