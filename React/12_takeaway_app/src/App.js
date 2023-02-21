import React, {useReducer, useState} from 'react';
import Meals from './components/Meals/Meals';
import CartContext from './store/cart-context';
import FilterMeals from './components/FilterMeals/FilterMeals';
import Cart from './components/Cart/Cart';


// 模拟一组食物数据
const MEALS_DATA = [
	{
		id: '1',
		title: '汉堡包',
		desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
		price: 12,
		img: '/img/meals/1.png'
	},
	{
		id: '2',
		title: '双层吉士汉堡',
		desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
		price: 20,
		img: '/img/meals/2.png'
	},
	{
		id: '3',
		title: '巨无霸',
		desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
		price: 24,
		img: '/img/meals/3.png'
	}, {
		id: '4',
		title: '麦辣鸡腿汉堡',
		desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
		price: 21,
		img: '/img/meals/4.png'
	}, {
		id: '5',
		title: '板烧鸡腿堡',
		desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
		price: 22,
		img: '/img/meals/5.png'
	}, {
		id: '6',
		title: '麦香鸡',
		desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
		price: 14,
		img: '/img/meals/6.png'
	}, {
		id: '7',
		title: '吉士汉堡包',
		desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
		price: 12,
		img: '/img/meals/7.png'
	}
];

const goodsDataHandler = (prestate, action) => {
	let newPrestate = {...prestate};
	switch (action.type) {
		case 'ADD': {
			/*
				向购物车中添加商品
					首先判断商品是否存在
			 */
			if (newPrestate.item.indexOf(action.meal) === -1) {
				newPrestate.item.push(action.meal);
				//初始化该商品数量
				action.meal.count = 1;
			} else {
				action.meal.count += 1;
			}

			//增加购物车商品总数
			newPrestate.totalCount += 1;
			//增加购物车商品总价格
			newPrestate.totalPrices += action.meal.price;

			//重新设置state
			return newPrestate;
		}
		case 'DEL': {
			action.meal.count -= 1;
			if (action.meal.count === 0) {
				newPrestate.item.splice(newPrestate.item.indexOf(action.meal), 1);
			}

			newPrestate.totalCount -= 1;
			newPrestate.totalPrices -= action.meal.price;

			return newPrestate;
		}
		case 'Clear': {
			prestate.item.forEach(item => {
				delete item.count;
			});
			return {
				item: [],
				totalCount: 0,
				totalPrices: 0
			};
		}
		default: {
			return prestate;
		}
	}
};


const App = () => {
	//创建存储数据的state
	const [mealsData, setmealData] = useState(MEALS_DATA);

	//使用reducer
	const [goodsData, goodsDataDispatch] = useReducer(goodsDataHandler, {
		item: [],
		totalCount: 0,
		totalPrices: 0
	});

	/*
		创建state用来存储购物车的商品
			1. item 商品种类
			2. totalCount 商品总的数量
			3. totalPrices 商品总的价格
	 */
	/*const [goodsData, setgoodsData] = useState({
		item: [],
		totalCount: 0,
		totalPrices: 0
	});

	//添加商品
	const addmealHandler = (meal) => {
		let newgoodsData = {...goodsData};
		/!*
			向购物车中添加商品
				首先判断商品是否存在
		 *!/
		if (newgoodsData.item.indexOf(meal) === -1) {
			newgoodsData.item.push(meal);
			//初始化该商品数量
			meal.count = 1;
		} else {
			meal.count += 1;
		}

		//增加购物车商品总数
		newgoodsData.totalCount += 1;
		//增加购物车商品总价格
		newgoodsData.totalPrices += meal.price;

		//重新设置state
		setgoodsData(newgoodsData);
	};

	//删除购物车中商品
	const delmealHandler = (meal) => {
		let newgoodsData = {...goodsData};
		meal.count -= 1;
		if (meal.count === 0) {
			newgoodsData.item.splice(newgoodsData.item.indexOf(meal), 1);
		}

		newgoodsData.totalCount -= 1;
		newgoodsData.totalPrices -= meal.price;

		setgoodsData(newgoodsData);
	};

	//清空购物车
	const ClearCart = () => {
		goodsData.item.forEach(item => {
			delete item.count;
		});
		setgoodsData({
			item: [],
			totalCount: 0,
			totalPrices: 0
		});
	};*/

	//搜索
	const searchMeals = (keyword) => {
		const showmeals = MEALS_DATA.filter(item => {
			return item.title.includes(keyword) || keyword === '';
		});

		setmealData(showmeals);
	};

	return (
		<CartContext.Provider value={{...goodsData, goodsDataDispatch}}>
			<div>
				<FilterMeals searchMeals={searchMeals}/>
				<Meals mealsData={mealsData}/>
				<Cart/>
			</div>

		</CartContext.Provider>

	);
};

export default App;
