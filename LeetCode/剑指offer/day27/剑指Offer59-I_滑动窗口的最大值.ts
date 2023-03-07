function maxSlidingWindow(nums: number[], k: number): number[] {
    let stack:number[] = [];
    let result:number[] = [];
    let left:number = 0;
    let right:number = 0;
    while (right<k){
        // while (stack.length&&nums[right]>stack[stack.length-1]){
        //     stack.pop()
        // }
        // stack.push(nums[right]);
        while (stack.length&&nums[right]>stack[stack[stack.length-1]]){
            stack.pop();
        }
        stack.push(right);
        right++;
    }
    // result.push(stack[0]);
    result.push(nums[stack[0]]);
    while (right<nums.length){
        // while (stack.length&&nums[right]>stack[stack.length-1]){
        //     stack.pop()
        // }
        // stack.push(nums[right]);
        // if (stack[0]===nums[left]){
        //     stack.shift();
        // }
        // result.push(stack[0]);
        while (stack.length&&nums[right]>stack[stack[stack.length-1]]){
            stack.pop();
        }
        stack.push(right);
        while (stack[0]<=left){
            stack.shift();
        }
        result.push(nums[stack[0]]);
        left++;
        right++;
    }
    return result;
};

console.log(maxSlidingWindow([1,-1], 1));