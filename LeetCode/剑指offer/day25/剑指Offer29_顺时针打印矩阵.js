/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
	if (matrix.length===0)
		return []
	let result = [];
	let dir = [[0,1],[1,0],[0,-1],[-1,0]];
	let dirindex = 0
	let index = 0;
	let lenx = matrix.length;
	let leny = matrix[0].length;
	let x = 0;
	let y = 0;
	while (index<lenx*leny){
		result.push(matrix[x][y]);
		matrix[x][y]=false;
		if(x+dir[dirindex][0]>=lenx || y+dir[dirindex][1]>=leny || x+dir[dirindex][0]<0 || y+dir[dirindex][1]<0 || matrix[x+dir[dirindex][0]][y+dir[dirindex][1]]===false){
			dirindex = (dirindex+1)%4;
		}
		x = x+dir[dirindex][0];
		y = y+dir[dirindex][1];
		index++;
	}
	return result;
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));