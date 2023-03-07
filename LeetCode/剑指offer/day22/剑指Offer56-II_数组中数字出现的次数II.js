/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let res = 0;
	for (let i = 0; i < 32; i++) {
		let cur = 0;
		let bitIndex = 1 << i;
		for (const num of nums) {
			if (num & bitIndex)
				cur++;
		}
		if (cur % 3 !== 0)
			res |= bitIndex;
	}
	return res;
};