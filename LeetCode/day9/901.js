var StockSpanner = function() {
    stack = [];
    index = 0;
    stack.push([-1,Number.MAX_VALUE]);
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.index++;
    while(price>=this.stack[this.stack.length-1][1]) {
        this.stack.pop();
    }
    let ans = this.index - this.stack[this.stack.length-1][0];
    this.stack.push([this.index,price]);
    return ans;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */