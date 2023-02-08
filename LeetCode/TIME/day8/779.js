/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var kthGrammar = function(n, k) {
    if (n==1||k==1) {
        return 0;
    }
    let pre = kthGrammar(n-1,Math.ceil(k/2));
    let reverse = -(pre-1);
    if (k%2==1) {
        return pre;
    }else{
        return reverse;
    }
 }