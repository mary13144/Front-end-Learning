import React, {useEffect, useState} from 'react';
import classes from './FilterMeals.module.css';

const FilterMeals = (props) => {

	//将input改为react受控组件
	const [keyword, setKeyword] = useState('');

	//搜索符合条件的商品
	const searchHandler = (e) => {
		// props.searchMeals(e.target.value);
		setKeyword(e.target.value.trim());
	};

	useEffect(() => {

		//在输入框中输入我们不希望每次input的value值变化时就进行过滤
		//而是希望用户在完全输入完成后再进行搜索过滤这样可以减少请求的发送
		const timer = setTimeout(() => {
			props.searchMeals(keyword);
		}, 1000);
		//effect的返回值可以是一个函数，这个函数会在下一次effect执行之前执行，清除上次effect所带来的影响
		return () => {
			clearTimeout(timer);
		};
	}, [keyword, props]);

	return (
		<div className={classes.FilterMeals}>
			<div className={classes.inputWrapper}>
				<i className={`iconfont icon-sousuoleimu ${classes.inputItem}`}></i>
				<input value={keyword} className={classes.inputSearch} type="text" placeholder={'请输入关键词'} onChange={searchHandler}/>
			</div>

		</div>
	);
};

export default FilterMeals;
