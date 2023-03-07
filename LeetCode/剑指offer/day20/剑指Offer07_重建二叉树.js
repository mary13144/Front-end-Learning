/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

	if (preorder.length === 0 || inorder.length === 0)
		return null;
	let index = inorder.indexOf(preorder[0]);
	let left = inorder.slice(0, index);
	let right = inorder.slice(index + 1);
	return {
		val: preorder[0],
		left: buildTree(preorder.slice(1, index + 1), left),
		right: buildTree(preorder.slice(index + 1), right)
	};

};