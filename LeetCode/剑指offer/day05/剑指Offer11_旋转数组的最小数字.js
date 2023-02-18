/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
	let cur = Number.MIN_SAFE_INTEGER;
	for (const number of numbers) {
		if (number >= cur) {
			cur = number;
			continue;
		}
		return number;
	}
	return numbers[0];
};

console.log(minArray([-9, -9, -9, -8, -8, -7, -7, -7, -7, -6, -6, -6, -6, -6, -6, -6, -6, -6, -5, -5, -5, -5, -5, -4, -4, -4, -3, -3, -3, -3, -3, -3, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -1, -1, -1, -1, -1, -1, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, -10, -9, -9, -9, -9]));