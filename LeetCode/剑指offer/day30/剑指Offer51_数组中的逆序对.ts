function reversePairs(nums: number[]): number {
    let count:number = 0;
    if (nums.length<2)
        return count;
    const merge = (front:number,behind:number):number[] =>{
        if (front === behind)
            return [nums[front]];
        let mid:number = front+((behind-front)>>1);
        let left = merge(front,mid);
        let right = merge(mid+1,behind)
        let cur = 0,l = 0,r = 0;
        let temp = [];
        while (l<left.length&&r<right.length){
            if (left[l]<=right[r]){
                temp[cur++] = left[l++];
            }
            if (left[l]>right[r]){
                temp[cur++] = right[r++];
                count+=left.length-l;
            }
        }
        while (l<left.length){
            temp[cur++]=left[l++];
        }
        while (r<right.length){
            temp[cur++]=right[r++];
        }
        return temp;
    }
    merge(0,nums.length-1)
    return count;
};