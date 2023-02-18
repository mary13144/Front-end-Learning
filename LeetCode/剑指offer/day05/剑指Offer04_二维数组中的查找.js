/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
	let ylen = matrix.length;
	if (ylen === 0)
		return false;
	let xlen = matrix[0].length;
	if (xlen > ylen) {
		for (const matrixElement of matrix) {
			let start = 0;
			let end = xlen;
			while (start < end) {
				let mid = Math.floor((start + end) / 2);
				if (matrixElement[mid] === target) {
					return true;
				} else if (matrixElement[mid] < target) {
					start = mid + 1;
				} else {
					end = mid;
				}
			}
		}
	} else {
		for (let i = 0; i < ylen; i++) {
			let start = 0;
			let end = ylen;
			while (start < end) {
				let mid = Math.floor((start + end) / 2);
				if (matrix[i][mid] === target) {
					return true;
				} else if (matrix[i][mid] < target) {
					start = mid + 1;
				} else {
					end = mid;
				}
			}
		}
	}
	return false;
};

console.log(findNumberIn2DArray([[1, 1]], 0));

