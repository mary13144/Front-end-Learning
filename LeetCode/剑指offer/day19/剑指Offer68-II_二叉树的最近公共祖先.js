/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function (root, p, q) {
// 	const searchAncestor = (root, p, ancestors) => {
// 		if (!root)
// 			return;
// 		ancestors.push(root);
// 		if (root === p) {
// 			return;
// 		}
// 		if (ancestors.at(-1) !== p) {
// 			searchAncestor(root.left, p, ancestors);
// 		}
// 		if (ancestors.at(-1) !== p) {
// 			searchAncestor(root.right, p, ancestors);
// 		}
// 		if (ancestors.at(-1) !== p) {
// 			ancestors.pop();
// 		}
// 	};
//
// 	let pAncestors = [];
// 	let qAncestors = [];
// 	searchAncestor(root, p, pAncestors);
// 	searchAncestor(root, q, qAncestors);
// 	let index = 0;
// 	let ans;
// 	while (pAncestors[index] === qAncestors[index]) {
// 		ans = pAncestors[index];
// 		index++;
// 	}
// 	return ans;
// };

var lowestCommonAncestor = function (root, p, q) {
	if (!root)
		return;
	if (root === p || root === q)
		return root;
	const left = lowestCommonAncestor(root.left, p, q);
	const right = lowestCommonAncestor(root.right, p, q);
	if (left !== null && right !== null)
		result = root;
	if (left !== null)
		return left;
	if (right !== null)
		return right;
	return null;
};

