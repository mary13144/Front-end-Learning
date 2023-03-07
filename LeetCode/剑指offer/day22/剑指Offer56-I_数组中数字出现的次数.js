/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
	let res = 0;
	for (const num of nums) {
		res ^= num;
	}
	let index = 1;
	while ((res & 1) === 0) {
		index++;
		res >>>= 1;
	}
	let r1 = 0, r2 = 0;
	for (const num of nums) {
		if (((num >>> index) & 1) === 0) {
			r1 ^= num;
		} else {
			r2 ^= num;
		}
	}

	return [r1, r2];

};