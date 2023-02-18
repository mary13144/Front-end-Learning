/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isSymmetric = function (root) {
// 	if (!root)
// 		return true;
// 	let q = [];
// 	q.push(root);
// 	while (q.length !== 0) {
// 		let len = q.length;
// 		for (let i = 0; i < len; i++) {
// 			let temp = q.shift();
// 			if (!temp)
// 				continue;
// 			q.push(temp.left);
// 			q.push(temp.right);
// 		}
// 		len = q.length;
// 		if (len % 2 === 1)
// 			return false;
// 		let left = 0;
// 		let right = len - 1;
// 		while (left < right) {
// 			if (q[left] === null && q[right] === null) {
// 				left++;
// 				right--;
// 				continue;
// 			}
// 			if (q[left] === null || q[right] === null)
// 				return false;
// 			if (q[left].val !== q[right].val)
// 				return false;
// 			left++;
// 			right--;
// 		}
// 	}
// 	return true;
// };

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
	if (!root)
		return true;
	return isSameTree(root.left, root.right);
};

const isSameTree = (leftTree, rightTree) => {
	if (leftTree === null && rightTree === null)
		return true;
	if (leftTree === null || rightTree === null)
		return false;
	if (leftTree.val !== rightTree.val)
		return false;

	return isSameTree(leftTree.right, rightTree.left) && isSameTree(leftTree.left, rightTree.right);
};
