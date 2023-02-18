/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let preq = new Array(nums.length + 1).fill(0);
	let result = Number.MIN_SAFE_INTEGER;
	let premin = 0;
	for (let i = 1; i <= nums.length; i++) {
		preq[i] = preq[i - 1] + nums[i - 1];
		if (preq[i] - premin > result) {
			result = preq[i] - premin;
		}
		if (preq[i] < premin) {
			premin = preq[i];
		}
	}
	return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));