/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
	let ans = [];
	for (let i = 2; i < s.length - 1; i++) {
		let left = s.substring(1, i);
		let right = s.substring(i, s.length - 1);
		// console.log(left, right);

		let leftnum = countStr(left);
		let rightnum = countStr(right);
		if (leftnum.length === 0 || rightnum.length === 0)
			continue;
		for (let leftnumElement of leftnum) {
			for (let rightnumElement of rightnum) {
				ans.push('(' + leftnumElement + ', ' + rightnumElement + ')');
			}
		}
	}
	return ans;
};

function countStr(s) {
	let ans = [];
	if (s.length === 1) {
		ans.push(s);
		return ans;
	}
	if (s.charAt(0) === '0' && s.charAt(s.length - 1) === '0') {
		return ans;
	}
	if (s.charAt(s.length - 1) === '0') {
		ans.push(s);
		return ans;
	}
	if (s.charAt(0) === '0') {
		let news = s.substring(0, 1) + '.' + s.substring(1);
		ans.push(news);
		return ans;
	}

	for (let i = 1; i < s.length; i++) {
		let news = s.substring(0, i) + '.' + s.substring(i);
		ans.push(news);
	}
	ans.push(s);
	return ans;
}

console.log(ambiguousCoordinates('(0123)'));
