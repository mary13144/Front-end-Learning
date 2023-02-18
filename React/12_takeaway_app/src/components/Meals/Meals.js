import React from 'react';
import Meal from './Meal/Meal';
import classes from './Meals.module.css';

const Meals = (props) => {
	let mealsData = props.mealsData.map(item => {
		return <Meal key={item.id} meal={item}/>;
	});

	return (
		<div className={classes.Meals}>

			{
				mealsData
			}
		</div>
	);
};

export default Meals;
