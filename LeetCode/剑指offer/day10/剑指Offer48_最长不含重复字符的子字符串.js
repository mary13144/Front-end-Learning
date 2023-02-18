/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let set = [];
	let result = 0;
	let prelen = 0;
	for (const sElement of s) {
		let index = set.indexOf(sElement);
		if (index === -1) {
			prelen += 1;
			if (prelen > result) {
				result = prelen;
			}
		} else {
			set = set.slice(index + 1);
			prelen = set.length + 1;
		}
		set.push(sElement);
	}
	return result;
};

console.log(lengthOfLongestSubstring('dvdf'));
;