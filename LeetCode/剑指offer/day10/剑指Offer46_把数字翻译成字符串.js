/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
	let strnum = String(num);
	let codeNum = new Array(strnum.length).fill(0);
	codeNum[0] = 1;
	if (strnum.length > 1) {
		let curnum = Number.parseInt(strnum.slice(0, 2));
		if (curnum >= 10 && curnum <= 25) {
			codeNum[1] = 2;
		} else {
			codeNum[1] = 1;
		}
	}
	for (let i = 2; i < strnum.length; i++) {
		let curnum = Number.parseInt(strnum.slice(i - 1, i + 1));
		if (curnum >= 10 && curnum <= 25) {
			codeNum[i] = codeNum[i - 1] + codeNum[i - 2];
		} else {
			codeNum[i] = codeNum[i - 1];
		}
	}
	return codeNum[strnum.length - 1];
};

console.log(translateNum(12258));