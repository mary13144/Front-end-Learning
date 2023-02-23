/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var isStraight = function (nums) {
// 	nums.sort((a, b) => {
// 		return a - b;
// 	});
//
// 	let newnums = nums.filter(item => item !== 0);
// 	let king = 5 - newnums.length;
// 	for (let i = 1; i < newnums.length; i++) {
// 		let cur = newnums[i] - newnums[i - 1];
// 		if (cur === 0)
// 			return false;
// 		else if (cur === 1)
// 			continue;
// 		else if (cur <= king + 1) {
// 			king -= (cur - 1);
// 		} else {
// 			return false;
// 		}
// 	}
// 	return true;
// };

var isStraight = function (nums) {

	nums.sort((a, b) => {
		return a - b;
	});
	let king = nums.lastIndexOf(0) + 1;
	let count = 0;
	for (let i = king; i < nums.length - 1; i++) {
		let cur = nums[i + 1] - nums[i] - 1;
		if (cur === -1)
			return false;
		count += cur;
	}
	return count <= king;
};

console.log(isStraight([9, 10, 4, 0, 9]));