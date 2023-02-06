/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let left = 0;
    let ansmax = 0;
    let nums = new Map();
    for (let right = 0;right<fruits.length;right++){
        nums.set(fruits[right],(nums.get(fruits[right])||0)+1);
        while (nums.size>2){
            nums.set(fruits[left],(nums.get(fruits[left]))-1);
            if (nums.get(fruits[left])===0){
                nums.delete(fruits[left]);
            }
            left++;
        }
        ansmax = Math.max(ansmax,right-left+1);
    }
    return ansmax;
};

