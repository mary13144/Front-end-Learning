/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (head == null)
		return null;
	let preNode = null;
	let newHead = head;
	while (newHead != null) {
		let oldNode = newHead;
		newHead = newHead.next;
		oldNode.next = preNode;
		preNode = oldNode;
	}
	return preNode;
};