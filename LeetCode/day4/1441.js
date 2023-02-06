/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 var buildArray = function(target, n) {
    let ans = [];
    let index = 0;
    for(let i = 1;i<=n;i++){
        if(i == target[index]){
            ans.push('Push');
            index++;
        }else{
            ans.push('Push','Pop');
        }
        if(index==target.length){
            break;
        }
    }
    return ans;
};