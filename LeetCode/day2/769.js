/**
 * @param {number[]} arr
 * @return {number}
 */
 var maxChunksToSorted = function(arr) {
    let ans = 0;
    let currentMax = 0;
    for(let i = 0;i<arr.length;i++){
        currentMax = Math.max(currentMax,arr[i]);
        if(currentMax === i){
            ans++;
        }
    }
    return ans;
};