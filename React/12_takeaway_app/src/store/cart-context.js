import React from 'react';


const CartContext = React.createContext({
	item: [],
	totalCount: 0,
	totalPrices: 0,
	addmel: () => {
	},
	delmel: () => {
	},
	ClearCart: () => {

	}
});

export default CartContext;