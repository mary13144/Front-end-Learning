/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
	let cur = head;
	pre = null;
	if (cur.val === val) {
		return head.next;
	}
	while (cur !== null) {
		if (cur.val === val) {
			pre.next = cur.next;
			return head;
		}
		pre = cur;
		cur = cur.next;
	}
};