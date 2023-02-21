/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	let lenx = board.length;
	let leny = board[0].length;
	let flag = new Array(lenx).fill([]).map(() => {
		return new Array(leny).fill(false);
	});
	const searchWord = (x, y, index) => {
		if (board[x][y] !== word.at(index))
			return false;
		else if (index === word.length - 1)
			return true;
		flag[x][y] = true;
		let result = false;
		let direction = [[-1, 0], [0, 1], [1, 0], [0, -1]];
		for (const [dirx, diry] of direction) {
			curx = x + dirx;
			cury = y + diry;
			if (curx >= board.length || cury >= board[0].length || curx < 0 || cury < 0) {
				continue;
			}
			if (flag[curx][cury]) {
				continue;
			}
			let curflag = searchWord(curx, cury, index + 1);
			if (curflag) {
				result = true;
				break;
			}

		}
		flag[x][y] = false;
		return result;
	};

	for (let i = 0; i < lenx; i++) {
		for (let j = 0; j < leny; j++) {

			let result = searchWord(i, j, 0);
			if (result)
				return true;
		}
	}
	return false;
};


console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED'));
