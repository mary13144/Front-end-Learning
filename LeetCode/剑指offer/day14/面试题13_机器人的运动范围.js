/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// var movingCount = function (m, n, k) {
// 	let flag = Array(m).fill(0).map(() => Array(n).fill(false));
//
// 	const sum = (num) => {
// 		let result = 0;
// 		while (num) {
// 			result += num % 10;
// 			num = Math.floor(num / 10);
// 		}
// 		return result;
// 	};
// 	const arrive = (x, y) => {
// 		console.log(flag);
// 		if (x >= m || y >= n || sum(x) + sum(y) > k || flag[x][y]) {
// 			return 0;
// 		} else {
// 			flag[x][y] = true;
// 			return 1 + arrive(x + 1, y) + arrive(x, y + 1);
// 		}
// 	};
// 	return arrive(0, 0);
// };


var movingCount = function (m, n, k) {
	let flag = Array(m).fill([]).map(() => Array(n).fill(false));

	const sum = (num) => {
		let result = 0;
		while (num) {
			result += num % 10;
			num = Math.floor(num / 10);
		}
		return result;
	};
	const arrive = (x, y) => {
		console.log(flag);

		flag[x][y] = true;
		let direction = [[1, 0], [0, 1]];
		for (const [dirx, diry] of direction) {
			let curx = x + dirx;
			let cury = y + diry;
			if (curx >= m || cury >= n || flag[curx][cury] || sum(curx) + sum(cury) > k) {
				continue;
			}
			arrive(curx, cury);
		}
	};
	arrive(0, 0);
	let result = 0;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (flag[i][j] === true)
				result++;
		}
	}
	return result;

};

console.log(movingCount(3, 2, 17));
