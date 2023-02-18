/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
	if (s.length === 0) {
		return ' ';
	}
	let map = new Map();
	for (const sElement of s) {
		if (!map.has(sElement)) {
			map.set(sElement, 1);
		} else {
			map.set(sElement, map.get(sElement) + 1);
		}
	}
	for (const sElement of s) {
		if (map.get(sElement) === 1)
			return sElement;
	}
	return ' ';
};