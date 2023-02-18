/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let min = Number.MAX_SAFE_INTEGER;
	let max = Number.MIN_SAFE_INTEGER;
	let result = 0;
	for (const price of prices) {
		if (price < min) {
			min = price;
			max = price;
		} else if (price > max) {
			max = price;
			result = (max - min > result) ? (max - min) : result;
		}
	}
	return result;
};