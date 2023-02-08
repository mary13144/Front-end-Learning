/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function (towers, radius) {
	let maxX = 0;
	let maxY = 0;
	for (let tower of towers) {
		maxX = Math.max(tower[0], maxX);
		maxY = Math.max(tower[1], maxY);
	}

	let ansX = 0;
	let ansY = 0;
	let maxPower = 0;
	for (let i = 0; i <= maxX; i++) {
		for (let j = 0; j <= maxY; j++) {
			let currentPower = 0;
			for (let tower of towers) {
				let len = Math.sqrt((tower[0] - i) ** 2 + (tower[1] - j) ** 2);
				if (len <= radius) {
					currentPower += Math.floor(tower[2] / (1 + len));
				}
			}
			if (currentPower > maxPower) {
				ansX = i;
				ansY = j;
				maxPower = currentPower;
			}
		}
	}
	return [ansX, ansY];
};

bestCoordinate([[1, 2, 5], [2, 1, 7], [3, 1, 9]], 2);