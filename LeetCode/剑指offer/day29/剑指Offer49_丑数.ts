function nthUglyNumber(n: number): number {
    let dp:number[] = new Array(n).fill(0);
    dp[0] = 1;
    let index_2 = 0;
    let index_3 = 0;
    let index_5 = 0;
    for (let i = 1; i < n; i++) {
        dp[i] = Math.min(dp[index_2]*2,dp[index_3]*3,dp[index_5]*5)
        if (dp[i]===dp[index_2]*2)
            index_2++;
        if (dp[i]===dp[index_3]*3)
            index_3++;
        if (dp[i]===dp[index_5]*5)
            index_5++;
    }
    return dp[n-1]
};

console.log(nthUglyNumber(10));
