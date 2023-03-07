/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
	if (postorder.length === 0)
		return true;
	let root = postorder.at(-1);
	let left = postorder.filter(item => item < root);
	let right = postorder.filter(item => item > root);
	if (left.length > 0 && right.length > 0 && postorder.indexOf(left.at(-1)) > postorder.indexOf(right[0]))
		return false;
	return verifyPostorder(left) && verifyPostorder(right);
};

console.log(verifyPostorder([4, 6, 7, 5]));