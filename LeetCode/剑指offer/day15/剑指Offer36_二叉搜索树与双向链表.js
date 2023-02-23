/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {

	let head = null;
	let pre = null;
	const treeList = (node) => {
		if (!node) {
			return;
		}
		treeList(node.left);
		if (pre === null) {
			head = node;
		} else {
			pre.right = node;
		}
		node.left = pre;
		pre = node;
		treeList(node.right);
	};
	if (root === null)
		return null;
	treeList(root);
	head.left = pre;
	pre.right = head;
	return head;
};