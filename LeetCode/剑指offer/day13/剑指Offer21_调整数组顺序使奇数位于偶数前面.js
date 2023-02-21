/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
	let left = 0;
	let right = nums.length - 1;
	while (left < right) {
		if (nums[left] % 2 === 0) {
			let temp = nums[left];
			nums[left] = nums[right];
			nums[right] = temp;
			right--;
		} else {
			left++;
		}
		if (nums[right] % 2 === 1) {
			let temp = nums[left];
			nums[left] = nums[right];
			nums[right] = temp;
			left++;
		} else {
			right--;
		}
	}
	return nums;
};

console.log(exchange([1, 2, 3, 4]));