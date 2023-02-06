/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
	target = target > 0 ? target : -target;
	let sum = 0;
	let index = 0;
	while (sum < target) {
		sum += index;
		index++;
	}
	if (sum - target % 2 === 0) {
		return index;
	} else {
		if (index % 2 === 0) {
			return index + 1;
		} else {
			return index + 2;
		}
	}
};

reachNumber(4);