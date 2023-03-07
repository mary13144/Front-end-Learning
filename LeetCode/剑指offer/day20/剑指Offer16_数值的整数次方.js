/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
	if (n < 0) {
		x = 1 / x;
		n = -n;
	}
	let result = 1;
	while (n > 0) {
		if (n & 1 === 1) {
			result *= x;
		}
		x *= x;
		n >>>= 1;
	}
	return result;
};


