/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {
	const m = grid.length;
	const n = grid[0].length;
	let queue = [];
	let arrival = new Set();
	let keys = 0;
	const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
	const zips = (char) => 1 << (char.toLocaleLowerCase().charCodeAt(0) - 97);
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === '@') {
				queue.push([i, j, 0, 0]);
				arrival.add(i + ',' + j + ',' + 0);
			} else if (/[a-f]/.test(grid[i][j])) {
				keys |= zips(grid[i][j]);
			}
		}
	}

	while (queue.length) {
		let [i, j, k, s] = queue.shift();

		if (keys === k) {
			return s;
		}
		for (let dir of dirs) {
			const nextI = i + dir[0];
			const nextJ = j + dir[1];


			if (nextI < 0 || nextJ < 0 || nextI >= m || nextJ >= n) {
				continue;
			}

			if (grid[nextI][nextJ] === '#') {
				continue;
			}

			if (/[A-F]/.test(grid[nextI][nextJ]) && !(k & zips(grid[nextI][nextJ]))) {
				continue;
			}

			const unikey = nextI + ',' + nextJ + ',' + k;
			console.log(unikey);
			if (arrival.has(unikey)) {
				continue;
			}
			arrival.add(unikey);

			/*遇到钥匙需要存储*/
			if (/[a-f]/.test(grid[nextI][nextJ])) {
				queue.push([nextI, nextJ, k | zips(grid[nextI][nextJ]), s + 1]);
			} else {
				queue.push([nextI, nextJ, k, s + 1]);
			}


		}
	}
	return -1;
};

console.log(shortestPathAllKeys(['.#.b.', 'A.#aB', '#d...', '@.cC.', 'D...#']));
