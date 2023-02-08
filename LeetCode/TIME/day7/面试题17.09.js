/**
 * @param {number} k
 * @return {number}
 */
 var getKthMagicNumber = function(k) {
    let point3 = 0;
    let point5 = 0;
    let point7 = 0;
    let result = [1];
    for (let i = 0; i < k-1; i++) {
        let flag = Math.min(result[point3]*3,result[point5]*5,result[point7]*7);
        if (flag%3==0) {
            point3++;
        }
        if (flag%5==0) {
            point5++;
        }
        if (flag%7==0) {
            point7++;
        }
        result.push(flag);
    }
    return result.at(-1);
};