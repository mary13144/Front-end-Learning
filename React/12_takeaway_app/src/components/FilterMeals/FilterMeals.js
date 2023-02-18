import React from 'react';
import classes from './FilterMeals.module.css';

const FilterMeals = (props) => {
	//搜索符合条件的商品
	const searchHandler = (e) => {
		props.searchMeals(e.target.value);
	}


	return (
		<div className={classes.FilterMeals}>
			<div className={classes.inputWrapper}>
				<i className={`iconfont icon-sousuoleimu ${classes.inputItem}`}></i>
				<input className={classes.inputSearch} type="text" placeholder={'请输入关键词'} onChange={searchHandler}/>
			</div>

		</div>
	);
};

export default FilterMeals;
