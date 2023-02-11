/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let result = 0;
	let firstindex = nums.indexOf(target);
	if (firstindex === -1) {
		return result;
	} else {
		result = 1;
	}

	for (let i = firstindex + 1; i < nums.length; i++) {
		if (nums[i] === target) {
			result++;
			continue;
		}
		return result;
	}

	return result;
};

search([3, 3, 3], 3);