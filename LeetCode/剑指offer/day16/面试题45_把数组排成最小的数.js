/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
	nums.sort((a, b) => {
		a = a + '';
		b = b + '';
		return (a + b) - (b + a);
	});
	return nums.join('').trim();
};

