function findNthDigit(n: number): number {
    let count = 9;
    let digit = 1;
    let start = 1;
    while (count<n){
        n-=count;
        digit++;
        start*=10;
        count=start*9*digit;
    }
    let num = start + (n-1)/digit;

    return +num.toString().charAt((n-1)%digit)
};