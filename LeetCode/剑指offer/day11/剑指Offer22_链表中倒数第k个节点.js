/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
	let nodeList = [];
	while (head != null) {
		nodeList.push(head);
		head = head.next;
	}
	return nodeList.at(-k);
};