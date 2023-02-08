/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
	let sCode = new Array(26);
	for (let i = 0; i < 26; i++) {
		sCode[i] = new Array(1).fill(-1);
	}
	for (let i = 0; i < s.length; i++) {
		let index = s.charCodeAt(i) - 97;
		sCode[index].push(i);
	}

	let ans = words.length;
	for (let word of words) {
		if (word.length > s.length) {
			ans--;
		}
		let index = -1;
		for (let wordElement of word) {
			// console.log(sCode[wordElement.charCodeAt(0) - 97].at(-1));
			if (sCode[wordElement.charCodeAt(0) - 97].at(-1) <= index) {
				ans--;
				break;
			} else {
				// for (let ele of sCode[wordElement.charCodeAt(0) - 97]) {
				// 	if (ele > index) {
				// 		index = ele;
				// 		break;
				// 	}
				// }
				index = binarySearch(sCode[wordElement.charCodeAt(0) - 97], index);
			}
		}
	}
	return ans;
};

function binarySearch(sCode, target) {
	let left = 0;
	let right = sCode.length - 1;

	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		if (sCode[mid] <= target) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}
	return sCode[left];
}

console.log(numMatchingSubseq('abcde', ['a', 'bb', 'acd', 'ace']));