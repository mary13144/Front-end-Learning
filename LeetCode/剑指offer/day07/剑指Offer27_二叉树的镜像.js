/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
	if (!root) {
		return root;
	}
	let result = root;
	let q = [];
	q.push(root);
	while (q.length !== 0) {
		let temp = q.shift();
		if (temp.left) {
			q.push(temp.left);
		}
		if (temp.right) {
			q.push(temp.right);
		}
		let lefttemp = temp.left;
		temp.left = temp.right;
		temp.right = lefttemp;
	}
	return result;
};