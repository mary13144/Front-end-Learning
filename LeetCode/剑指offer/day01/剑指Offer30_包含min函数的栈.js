/**
 * initialize your data structure here.
 */
var MinStack = function () {
	this.stack = [];
	this.minstack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {

	this.stack.push(x);
	if (this.minstack.length === 0 || this.minstack[this.minstack.length - 1] > x) {
		this.minstack.push(x);
	} else {
		this.minstack.push(this.minstack[this.minstack.length - 1]);
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.stack.pop();
	this.minstack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
	return this.minstack[this.minstack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */