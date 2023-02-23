/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
	let result = [];
	const pathLength = (node, surplus, list) => {
		if (node === null) {
			return;
		}
		if (node.val > surplus) {
			return;
		}
		list.push(node.val);
		if (node.val === surplus && node.left === null && node.right === null) {
			result.push(list.slice(0));
		}
		pathLength(node.left, surplus - node.val, list);
		pathLength(node.right, surplus - node.val, list);
		list.pop();
	};
	pathLength(root, target, []);
	return result;
};