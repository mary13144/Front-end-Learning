const compare = (a, b) => a > b;

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

class Heap {
	constructor(comp = compare) {
		this.container = [];
		this.type = comp;
	}

	insert(data) {
		const {container, type} = this;
		container.push(data);
		let index = this.size() - 1;
		while (index) {
			let parent = (index - 1) >> 1;
			if (type(container[parent], container[index])) {
				return;
			}
			swap(container, parent, index);
			index = parent;
		}
	}


	pop() {
		const {container, type} = this;
		if (this.size() === 0)
			return null;
		swap(container, 0, this.size() - 1);
		const res = container.pop();
		let len = this.size();
		let index = 0;
		let exchange = index * 2 + 1;
		while (exchange < len) {
			let right = exchange + 1;
			if (right < len && type(container[right], container[exchange])) {
				exchange = right;
			}
			if (type(container[index], container[exchange])) {
				break;
			}
			swap(container, exchange, index);
			index = exchange;
			exchange = index * 2 + 1;
		}

		return res;
	}


	size() {
		return this.container.length;
	}

	top() {
		return this.size() === 0 ? null : this.container[0];
	}
}

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
	this.min = new Heap((a, b) => a < b);
	this.max = new Heap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
	if (this.min.size() !== this.max.size()) {
		this.max.insert(num);
		this.min.insert(this.max.pop());
	} else {
		this.min.insert(num);
		this.max.insert(this.min.pop());
	}
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
	return this.min.size() === this.max.size() ? (this.min.top() + this.max.top()) / 2 : this.max.top();
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

