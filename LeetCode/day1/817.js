/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
 var numComponents = function(head, nums) {
    let numSet = new Set(nums);
    let flag = false;
    let number = 0;
    if(numSet.has(head.val)){
        flag = true;
        number++;
    }
    head = head.next;
    while(head.val!=0){
        if(flag==false&&numSet.has(head.val)){
            number++;
            flag= true;
        }else if(!numSet.has(head.val)){
            flag = false;
        }
        head = head.next;
    }

    return number;
};