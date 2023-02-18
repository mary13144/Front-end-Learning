/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
	if (n === 0)
		return 0;
	const mod = 1000000007;
	let q = 0, p = 0, r = 1;
	for (let i = 2; i < n; i++) {
		q = p;
		p = r;
		r = (p + q) % mod;
	}
	return r;
};