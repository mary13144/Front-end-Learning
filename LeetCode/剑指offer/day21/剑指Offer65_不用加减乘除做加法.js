/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
	let result = a ^ b;
	let carryOut = (a & b) << 1;
	while (carryOut !== 0) {
		let temp = carryOut;
		carryOut = (carryOut & result) << 1;
		result ^= temp;
	}
	return result;
};