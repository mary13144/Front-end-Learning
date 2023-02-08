/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
	let ans = 0;
	let flag = word;
	while (sequence.indexOf(flag) !== -1) {
		flag += word;
		ans++;
	}
	return ans;
};

console.log(maxRepeating('aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba'));