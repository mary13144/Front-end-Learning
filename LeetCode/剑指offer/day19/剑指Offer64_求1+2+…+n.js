/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
	let sum = n;
	return n > 0 && sum + sumNums(n - 1);
};