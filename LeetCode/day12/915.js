/**
 * @param {number[]} nums
 * @return {number}
 */
 var partitionDisjoint = function(nums) {
    let max = nums[0];
    let leftmax = nums[0];
    let ansindex = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max,nums[i]);
        if (nums[i]<leftmax) {
            leftmax = max;
            ansindex = i;
        }  
    }
    return ansindex+1;
};