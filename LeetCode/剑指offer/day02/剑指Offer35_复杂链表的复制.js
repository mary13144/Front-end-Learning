/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
	if (head === null) {
		return null;
	}
	let newhead = new Node();
	let cur = head;
	let newcur = newhead;
	let map = new Map();
	while (cur) {
		newcur.val = cur.val;
		newcur.next = cur.next ? new Node() : null;
		map.set(cur, newcur);
		cur = cur.next;
		newcur = newcur.next;
	}
	result = newhead;
	while (head) {
		newhead.random = head.random ? map.get(head.random) : null;
		head = head.next;
		newhead = newhead.next;
	}

	return result;
};

