/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
	let set = new Set();
	for (const Element of nums) {
		if (!set.has(Element)) {
			set.add(Element);
			continue;
		}
		return Element;
	}

};