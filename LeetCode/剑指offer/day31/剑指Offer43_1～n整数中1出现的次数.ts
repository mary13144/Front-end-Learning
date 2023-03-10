function countDigitOne(n: number): number {
    let high:number = Math.floor(n/10);
    let cur:number = n%10;
    let low:number = 0;
    let res:number = 0;
    let digit:number = 1;
    while (high!==0||cur!==0){
        if (cur === 0){
            res+=high*digit;
        }else if (cur===1){
            res+=high*digit+low+1;
        }else {
            res+=(high+1)*digit;
        }
        low+=cur*digit;
        cur=high%10;
        high = Math.floor(high/10);
        digit*=10;
    }
    return res;
};

console.log(countDigitOne(12));