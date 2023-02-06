/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var isIdealPermutation = function (nums) {
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[i] > nums[j] && j - i > 1) {
// 				return false;
// 			}
// 		}
// 	}
// 	return true;
// };

var isIdealPermutation = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		if (Math.abs(nums[i] - i) > 1) {
			return false;
		}
	}
	return true;
};