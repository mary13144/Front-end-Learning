/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	let cur = s.trim().split(' ');
	return cur.reverse().reduce((pre, cur) => {
		if (cur === '')
			return pre;
		return pre + ' ' + cur.trim();
	});
};

console.log(reverseWords('  hello world!  '));
;