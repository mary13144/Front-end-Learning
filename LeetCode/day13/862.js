/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var shortestSubarray = function(nums, k) {
    let n = nums.length;
    let presum = new Array(n+1).fill(0);
    for (let i = 0; i < n; i++) {
        presum[i+1] = presum[i]+nums[i];
    }
    let queue = [];
    let ans = n+1;
    for (let i = 0; i <= n; i++) {
        let cursum = presum[i]
        while (queue.length!=0&&(cursum-presum[queue[0]])>=k) {
            ans = Math.min(ans,i-queue.shift());
        }
        while (queue.length!=0&&presum[queue[queue.length-1]]>=cursum) {
            queue.pop();
        }
        queue.push(i);
    }
    return ans<n+1?ans:-1;
};