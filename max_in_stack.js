// Find the max ele in the stack 

// two stacks --> 
//  one will hold all the given integers
// and one will hold the max ele

//.push() and .pop()

// whenever we push, we must compare it to the current max, which will be at the top of the stack 

class maxStack {
    constructor() {
        this.stack = [];
        this.maxStack = [];
    }

    push(num) {
        this.stack.push(num);  // first we will push our number in the stack 

        if (Math.max(this.MaxStack) === null || num >= Math.max.apply(null, this.MaxStack)) {
            this.maxStack.push(num);
        }
    }

    pop() {
        const poppedNum = this.stack.pop();

        if (poppedNum === Math.max.apply(null, this.maxStack)) {
            this.maxStack.pop(); 
        }

        return poppedNum; 
    }


    getMax() {
        return Math.max.apply(null, this.maxStack)
    }
}

const test = new maxStack();
test.push(2);
test.push(4);
test.push(6);
test.pop(6);
console.log(test.getMax());

// Math.Max --> you give it two numbers to compare and it will compare which is greater