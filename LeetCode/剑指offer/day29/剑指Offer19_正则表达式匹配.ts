function isMatch(s: string, p: string): boolean {
    const sLen = s.length;
    const pLen = p.length;
    const dp = new Array<boolean[]>(sLen+1);
    for (let idx = 0; idx < dp.length; idx++) {
        dp[idx] = new Array<boolean>(pLen+1).fill(false);
    }

    const isMatchIdx: (sIdx: number, pIdx: number) => boolean = (sIdx, pIdx) => {
        return p[pIdx-2] === s[sIdx-1] || p[pIdx-2] === '.';
    }

    // 初始化 dp
    dp[0][0] = true;
    for(let j = 2; j <= pLen; j += 2) {
        //当s为空时，p必须满足a*b*.*这样的结构才能匹配成空串
        //当s不为空，p为空为false
        dp[0][j] = dp[0][j - 2] && p[j - 1] == '*';
    }

    for (let i = 1; i < sLen+1; i++) {
        for (let j = 0; j < pLen+1; j++) {
            if (p[j-1] === '*') {
                if (isMatchIdx(i, j)) {
                    dp[i][j] = dp[i][j-2] || dp[i-1][j];
                } else {
                    dp[i][j] = dp[i][j-2];
                }
            } else {
                if (isMatchIdx(i, j+1)) {
                    dp[i][j] = dp[i-1][j-1];
                } else {
                    dp[i][j] =false;
                }
            }
        }
    }

    return dp[sLen][pLen];
};