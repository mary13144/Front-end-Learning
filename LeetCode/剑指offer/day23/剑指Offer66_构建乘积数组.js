/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
	let left =new Array(a.length+1).fill(1);
	let right =new Array(a.length+1).fill(1);
	let result = new Array(a.length).fill(1);
	for (let i = a.length-1; i>=0; i--) {
		right[i]=right[i+1]*a[i];
	}
	for (let i = 1; i <=a.length; i++) {
		left[i] = left[i-1]*a[i-1];
		result[i-1] = left[i-1]*right[i]
	}

	return result;
};

