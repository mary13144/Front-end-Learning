function dicesProbability(n: number): number[] {
    let dp:number[][]=new Array(n+1).fill([]).map(item=>new Array(n*6+1).fill(0))
    let ans:number[] = new Array(5*n+1).fill(0)
    let allSum:number = Math.pow(6,n);
    for (let i = 1; i <=6; i++)
        dp[1][i] = 1;
    for (let i = 1; i <=n; i++) {
        for (let j = i; j<=i*6; j++) {
            for (let k = 1; k <= 6; k++) {
                dp[i][j]+=j>=k?dp[i-1][j-k]:0
                if (i===n)
                    ans[j-i] = +(dp[i][j]/allSum).toFixed(5);
            }
        }
    }
    return ans;
};


