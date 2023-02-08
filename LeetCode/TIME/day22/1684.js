/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
	let ans = 0;
	let allowedlist = allowed.split('');
	for (let word of words) {
		let flag = true;
		for (let wordElement of word) {
			if (!allowed.includes(wordElement)) {
				flag = false;
				break;
			}
		}
		if (flag)
			ans++;
	}
	return ans;
};