/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	const depthMax = (root) => {
		if (root === null)
			return 0;
		return 1 + Math.max(depthMax(root.left), depthMax(root.right));
	};

	return depthMax(root);
};