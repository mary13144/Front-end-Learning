/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
	let n = s.length;
	let before = 0;
	let after = 0;
	let charSet = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	for (let i = 0; i < n; i++) {
		if (i < n / 2) {
			if (charSet.includes(s[i])) {
				before++;
			}
		} else {
			if (charSet.includes(s[i])) {
				after++;
			}
		}
	}
	return before === after;
};