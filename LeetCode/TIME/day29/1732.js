/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
	let ans = 0;
	let current = 0;
	for (let number of gain) {
		current += number;
		if (current > ans) {
			ans = current;
		}
	}
	return ans;
};