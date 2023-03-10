function cuttingRope(n: number): number {
    if (n<=3)
        return n-1;
    let div:number = Math.floor(n/3);
    let result:number = 1;
    let more = n%3;
    for (let i = 0; i < div; i++) {
        let temp = i<div-1?3:(more===2?more*3:more+3)
        result = (result*temp)%1000000007;
    }
    return result;
};