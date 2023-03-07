/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
	if (n<=3)
		return n-1;
	let div = Math.floor(n/3);
	let more = n%3;
	let result = Math.pow(3,div-1)*(more===2?3*more:(3+more));
	return result;

};