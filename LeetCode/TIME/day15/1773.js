/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
	let ans = 0;
	let itemsindex = ['type', 'color', 'name'];
	for (let i = 0; i < items.length; i++) {
		let index = itemsindex.indexOf(ruleKey);
		if (items[i][index] === ruleValue) {
			ans++;
		}
	}
	return ans;
};