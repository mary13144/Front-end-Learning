/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
	let result = [];
	const sortTree = (node) => {
		if (node === null)
			return;
		sortTree(node.left);
		result.push(node.val);
		sortTree(node.right);

	};
	sortTree(root);
	return result.at(-k);
};