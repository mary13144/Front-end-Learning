/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
	if (n === 0 || n === 1)
		return 1;
	const mod = 1000000007;
	let q = 1, p = 1, r = 2;
	for (let i = 3; i <= n; i++) {
		q = p;
		p = r;
		r = (p + q) % mod;
	}
	return r;
};