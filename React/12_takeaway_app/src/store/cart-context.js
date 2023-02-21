import React from 'react';


const CartContext = React.createContext({
	item: [],
	totalCount: 0,
	totalPrices: 0,
	goodsDataDispatch: () => {
	}
});

export default CartContext;