/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
	if (!root){
		return '';
	}
	let result = [];
	let stack = [];
	stack.push(root);
	result.push(root.val);
	while (stack.length!==0){
		let len = stack.length;
		for (let i = 0; i < len; i++) {
			let node = stack.shift();
			if (node.left){
				stack.push(node.left);
				result.push(node.left.val);
			}else {
				result.push(null);
			}
			if (node.right){
				stack.push(node.right);
				result.push(node.right.val);
			}else {
				result.push(null);
			}
		}
	}
	return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
	if (data.length === 0)
		return null
	let nodes = data.split(',');
	let stack = [];
	let head = new TreeNode(nodes.shift())
	stack.push(head);
	while (nodes.length!==0){
		let node = stack.shift();
		for (let i = 0; i < 2; i++) {
			let child = +nodes.shift();
			if (child==''){
				continue;
			}
			let treeNode = new TreeNode(child);
			stack.push(treeNode);
			if (i === 0){
				node.left = treeNode;
			}else {
				node.right = treeNode;
			}
		}
	}
	return head;
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */