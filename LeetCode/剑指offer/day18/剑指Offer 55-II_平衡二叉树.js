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
var isBalanced = function (root) {
	if (!root)
		return true;
	let leftDepth = depthMax(root.left);
	let rightDepth = depthMax(root.right);
	if (Math.abs(leftDepth - rightDepth) > 1) {
		return false;
	}
	return isBalanced(root.left) && isBalanced(root.right);

};

const depthMax = (root) => {
	if (!root)
		return 0;
	return 1 + Math.max(depthMax(root.left), depthMax(root.right));
};