/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let result = nums.filter((value, index) => {
		return value !== index;
	});

	if (result.length === 0)
		return nums.length;
	else
		return result[0] - 1;
};

console.log(missingNumber([0, 1, 3]));