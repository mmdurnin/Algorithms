// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Modify the definition of the Stack class provided to create an enhanced 
// version of a Stack data structure called MinMaxStack.
//
// A MinMaxStack has all of the same behavior as a Stack, but can also return
// the node with the minimum or maximum value in constant time.
//
// You may alter any of the original Stack's methods, including the 
// constructor.
//  
// Values of nodes of the MinMaxStack are always guaranteed to be numbers.
//
//
// ------------
// Constraints:
// ------------
//
// (1) All MinMaxStack methods must run in constant time, O(1).
//
//
// --------
// Example:
// --------
//
// const minMaxStack = new MinMaxStack();
//
// minMaxStack.push(10);
// minMaxStack.push(12);
// minMaxStack.push(8);
// minMaxStack.push(2);
// minMaxStack.push(20);
//
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 20
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 8
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 10
//
// minMaxStack.pop();
// console.log(minMaxStack.min());   => null
// console.log(minMaxStack.max());   => null
//
//
// -----------
// Let's code!
// -----------
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.min = null;
        this.max = null;
    }
}

// Refactor the regular Stack below into a MinMaxStack!
class MinMaxStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.minStack = null;
        this.maxStack = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        const max = new Node(val);
        const min = new Node(val);

        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
            
            this.minStack = min;
            this.minStack.top = min;
            this.minStack.bottom = min;

            this.maxStack = max;
            this.maxStack.top = max;
            this.maxStack.bottom = max;
        } else {
            // add to min stack
            if (this.minStack.top.value < min.value) {
                const newMin = new Node(this.minStack.top.value)
                const tempMin = this.minStack.top;
                this.minStack.top = newMin;
                this.minStack.top.next = tempMin;
            } else {
                const tempMin = this.minStack.top;
                this.minStack.top = min;
                this.minStack.top.next = tempMin;
            }
            // add to max stack
            if (this.maxStack.top.value > max.value) {
                const newMax = new Node(this.maxStack.top.value)
                const tempMax = this.maxStack.top;
                this.maxStack.top = newMax;
                this.maxStack.top.next = tempMax;
            } else {
                const tempMax = this.maxStack.top;
                this.maxStack.top = max;
                this.maxStack.top.next = tempMax;
            }


            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        return ++this.length;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        const temp = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
            this.minStack.bottom = null;
            this.maxStack.bottom = null;
        }
        this.top = this.top.next;
        this.minStack.top = this.minStack.top.next;
        this.maxStack.top = this.maxStack.top.next;

        this.length--;
        return temp.value;
    }

    size() {
        return this.length;
    }

    min() {
        return this.minStack.top;
    }

    max() {
        return this.maxStack.top;
    }
}

const test = new MinMaxStack();
test.push(2);
test.push(2);
test.push(90);
test.push(0);
test.push(-39);
test.push(7);
test.push(2);
console.log(test.min().value);
test.push(-40);
console.log(test.min().value);
test.pop()
console.log(test.min().value);

// Forgetting something down here? 
exports.Node = Node;
exports.Stack = MinMaxStack;
