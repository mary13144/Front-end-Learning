/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
	let i, len, numFlag = false, dotFlag = false, eFlag = false;
	s = s.trim(); // 去掉首尾空格
	len = s.length; // 去掉后再重新计算长度
	for(i = 0; i < len; i++) {
		// 如果是数字，那么直接将 numFlag 变为 true 即可
		if(s[i] >= '0' && s[i] <= '9') {
			numFlag = true;
		} else if(s[i] === '.' && !dotFlag && !eFlag) {
			// 如果是 .  那必须前面还出现过 .  且前面没出现过 e/E，因为如果前面出现过 e/E 再出现. 说明 e/E 后面跟着小数，不符合题意
			dotFlag = true;
		} else if((s[i] === 'e' || s[i] === 'E') && !eFlag && numFlag) {
			// 如果是 e 或 E，那必须前面没出现过 e/E，且前面出现过数字
			eFlag = true;
			numFlag = false; // 这一步很重要，将是否出现过数字的 Flag 置为 false，防止出现 123E 这种情况，即出现 e/E 后，后面没数字了
		} else if((s[i] === '+' || s[i] === '-') && (i === 0 || (s[i - 1] === 'e' || s[i - 1] === 'E'))) {
			// 如果是 +/- 那必须是在第一位，或是在 e/E 的后面
		} else {
			// 上面情况都不满足，直接返回 false 即可，提前剪枝
			return false;
		}
	}
	return numFlag;
};