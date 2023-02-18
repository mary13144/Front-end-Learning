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
	if (root) {
		return result;
	}
	let q = [];
	q.push(root);
	let flag = true;
	while (q.length !== 0) {
		let len = q.length;
		let cur = [];
		for (let i = 0; i < len; i++) {
			let temp = q.shift();
			cur.push(temp.val);
			if (temp.left)
				q.push(temp.left);
			if (temp.right)
				q.push(temp.right);
		}
		if (!flag)
			cur = cur.reverse();
		result.push(cur);
	}
	return result;
};
