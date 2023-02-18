import React from 'react';
import classes from './Meal.module.css';
import Counter from '../../UI/Counter/Counter';


const Meal = (props) => {
	return (
		<div className={classes.Meal}>
			<div className={classes.ImgBox}>
				<img src={props.meal.img} alt={'汉堡'}/>
			</div>
			<div className={classes.Content}>
				<h2 className={classes.Title}>{props.meal.title}</h2>
				{
					props.noDesc ? null : <p className={classes.Desc}>{props.meal.desc}</p>
				}
				<div className={classes.PriceBox}>
					<span className={classes.Price}>{props.meal.price}</span>
					<Counter meal={props.meal}/>
				</div>
			</div>
		</div>
	);
};

export default Meal;
