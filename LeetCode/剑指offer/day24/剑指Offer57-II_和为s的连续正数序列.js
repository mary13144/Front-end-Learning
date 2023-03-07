/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
	let result = [];
	let temp = [];
	let left = 1;
	let right = 1;
	let top = Math.ceil(target/2);
	while (left<=right&&right<=top+1){
		if (target===0){
			result.push([...temp])
			target+=left;
			temp.shift();
			left++;
		}
		if (target>0){
			target-=right;
			temp.push(right);
			right++;
		}
		if (target<0){
			target+=left;
			temp.shift();
			left++;
		}
	}
	return result;
};

console.log(findContinuousSequence(9));