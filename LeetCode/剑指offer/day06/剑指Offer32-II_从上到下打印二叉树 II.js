/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	let result = [];
	if (!root) {
		return result;
	}
	let stack = [];
	stack.push(root);
	while (stack.length !== 0) {
		let len = stack.length;
		let cur = [];
		for (let i = 0; i < len; i++) {
			let temp = stack.shift();
			cur.push(temp.val);
			if (temp.left)
				stack.push(temp.left);
			if (temp.right)
				stack.push(temp.right);
		}
		result.push(cur);
	}
	return result;
};