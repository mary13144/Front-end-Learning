function printNumbers(n: number): number[] {
    let top = Math.pow(10,n);
    let result = [];
    for (let i = 1; i <=top-1; i++) {
        result.push(i)
    }
    return result;
};
