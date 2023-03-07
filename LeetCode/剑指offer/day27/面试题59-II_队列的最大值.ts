class MaxQueue {
    private stack:number[];
    private q:number[];
    constructor() {
        this.stack = [];
        this.q = [];
    }

    max_value(): number {
        if (this.stack.length>0)
            return this.stack[0];
        else
            return -1;
    }

    push_back(value: number): void {
        while (value>this.stack[this.stack.length-1]){
            this.stack.pop();
        }
        this.stack.push(value);
        this.q.push(value);
    }

    pop_front(): number {
        if (this.q.length>0){
            let result = this.q.shift();
            if (result === this.stack[0]){
                this.stack.shift();
            }
            return result;
        }else
            return -1;
    }
}