/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
	let stack = [];
	let bool = {
		'false': 'f',
		'true': 't'
	};
	for (let item of expression) {
		if (item === ')') {
			let current = [];
			let flag = stack.pop();
			while (flag !== '(') {
				current.push(flag);
				flag = stack.pop();
			}
			let operator = stack.pop();
			switch (operator) {
				case '!':
					stack.push(bool[current.shift() === 'f']);
					break;
				case '&':
					stack.push(bool[!current.includes('f')]);
					break;
				case '|':
					stack.push(bool[current.includes('t')]);
					break;
			}
		} else if (item !== ',') {
			stack.push(item);
		}
	}
	return stack.pop() !== 'f';
};

console.log(parseBoolExpr('|(f,&(t,t))'));
