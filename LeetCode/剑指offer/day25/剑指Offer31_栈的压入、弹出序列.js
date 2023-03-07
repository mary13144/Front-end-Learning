/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
	let q = [];
	let index = 0;
	let len = popped.length;
	while (index<len){
		if (popped[index]!==q.at(-1)){
			if (pushed.length>0){
				q.push(pushed.shift())
			}else
				return false;
		}else {
			q.pop();
			index++;
		}
	}
	return true;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4,3,5,1,2]));