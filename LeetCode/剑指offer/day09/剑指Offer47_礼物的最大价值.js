/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
	let x = grid.length;
	let y = grid[0].length;
	let pregrid = new Array(x + 1).fill(new Array(y + 1).fill(0));
	for (let i = 1; i <= x; i++) {
		for (let j = 1; j <= y; j++) {
			pregrid[i][j] = Math.max(pregrid[i - 1][j], pregrid[i][j - 1]) + grid[i - 1][j - 1];
		}
	}
	return pregrid[x][y];
};

console.log(maxValue([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));