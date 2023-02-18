/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
	if (A === null || B === null)
		return false;
	let q = [];
	q.push(A);
	let result = false;
	while (q.length !== 0) {
		let temp = q.shift();
		if (temp.val === B.val) {
			result = isSameTree(temp, B);
			if (result)
				return result;
		}
		if (temp.left)
			q.push(temp.left);
		if (temp.right)
			q.push(temp.right);
	}
	return result;
};

const isSameTree = (aTree, bTree) => {
	if (!bTree)
		return true;
	if (!aTree)
		return false;
	if (aTree.val !== bTree.val)
		return false;
	return isSameTree(aTree.left, bTree.left) && isSameTree(aTree.right, bTree.right);
};