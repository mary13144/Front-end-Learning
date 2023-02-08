/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
 var jobScheduling = function(startTime, endTime, profit) {
    if (startTime.length==1) {
        return profit[0];
    }
    let n = startTime.length;
    let dp = new Array(n+1).fill(0);
    const jobs = new Array(n).fill(0).map((_, i) => [startTime[i], endTime[i], profit[i]]);
    jobs.sort((a, b) => a[1] - b[1]);
    for (let i = 1; i <=n; i++) {
        const index = binarySearch(jobs,i-1,jobs[i-1][0]);
        dp[i] = Math.max(dp[i-1],dp[index]+jobs[i-1][2]);
    }
    return dp[n];
};

const binarySearch = (jobs,right,target)=>{
    let left = 0;
    while (left<right) {
        let mid = Math.floor((left+right)/2);
        if (jobs[mid][1]>target) {
            right = mid;
        }else{
            left = mid+1;
        }
        
    }
    return left;
}