/**
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {
    if (nums.includes(0)) {
        return 0;
    }
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]<0) {
            index++;
        }
    }
    return index%2==0?1:-1;
};