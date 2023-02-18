/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
	let result = [];
	if (!root) {
		return result;
	}
	let q = [];
	q.push(root);
	while (q.length !== 0) {
		let len = q.length;
		let i = 0;
		while (i < len) {
			let temp = q.shift();
			result.push(temp.val);
			if (temp.left)
				q.push(temp.left);
			if (temp.right)
				q.push(temp.right);
		}
	}
	return result;
};