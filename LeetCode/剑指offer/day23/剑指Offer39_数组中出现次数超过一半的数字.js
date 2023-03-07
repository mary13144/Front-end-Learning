/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	nums.sort((a,b)=>a-b)
	return nums.at(nums.length>>>1)
};

console.log(majorityElement([3, 2, 3]));