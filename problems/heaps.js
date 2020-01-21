//HEAPS
/*
A HEAP is a partially ordered data structure
- root of tree = max or min

MAX HEAP
* Given any node, its children must be less than or equal to its value
(min heap same but opposite)

BINARY HEAP (like a binary tree)

COMPLETE TREE / BALANCED TREE
* Least number of levels
Complete = all levels except for leaf level have the max number of children, last level has all nodes filled as far left as possible
Balanced = Kinda the same but I tthink that the left rule may not apply
A tree is balanced / complete as a quality of a tree (it can be binary, etc)
A tree can be balanced but not complete
A tree that is complete is also balanced


WHEN ARE HEAPS USEFUL
When attacking problems that requier you to "partially sort" data
ex: calcuatte the largest or smalled n numbers in a collection
ex: Find the largest 5 numbers in an array in linear time (usually nlogn)
*/


// BINARY HEAP IMPLEMENTATION
// Uses an array

class binaryHeap {
    constructor() {
        this.array = null;
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    // INSERT
    // push into array and swap until we get to position
    // called "sifting up"
    // O(logn)

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftUp(idx) {
        if (idx === 1) return;

        let parentIdx = this.getParent(idx);

        // if the array at this idx (our new val) is greater than its parent, swap

        if (this.array[parentIdx] < this.array[idx]) {
            this.array[parentIdx], this.array[idx] = this.array[idx], this.array[parentIdx]
        }

        this.siftUp(parentIdx);
    }

    // DELETE MAX
    // continually swap to the back of array until heap is properly restored
    // O(logn)

    deleteMax() {
        if (this.array.length === 2) return this.array.pop(); // if theres only one element in the heap, remove it
        // (we store a null value att index 0)

        if (this.array.length === 1) return null;
        // if there are no elements in the heap do nothing

        let max = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1); // this will launch all the cycles back to restoring heap structure
        return max;
    }

    siftDown(idx) {
        let arr = this.array;
        let leftChild = this.getLeftChild();
        let rightChild = this.getRightChild();
        let leftVal = arr[leftChild];
        let rightVal = arr[rightChild];

        if (arr[idx] > leftVal && arr[idx] > rightVal) return;
        if (leftVal > rightVal) {
            var swapIdx = rightChild
        } else {
            var swapIdx = leftChild
        }

        arr[idx], arr[swapIdx] = arr[swapIdx], arr[idx]

        this.siftDown(swapIdx)
    }
}


function heapify(array, n, i) {
    let leftIdx = i * 2 + 1;
    let rightIdx = i * 2 + 2;
    let leftVal = array[leftIdx];
    let rightVal = array[rightIdx];

    // Make sure we're not targeting region outside of heap
    if (leftIdx >= n) leftVal = -Infinity;
    if (rightIdx >= n) rightVal = -Infinity; 

    // base case (if array @ parent index is greater than children, return)
    if (array[i] > leftVal && array[i] > rightVal) return;

    let swapIdx;
    if (leftVal < rightVal) {
        swapIdx = rightIdx;
    } else {
        swapIdx = leftIdx;
    };

    // swap the array element @ parent position with the array element that is bigger (@ swap index)
    swap(array, i, swapIdx)
    // continue swapping the targeted element until its child isn't bigger than it
    heapify(array, n, swapIdx)
}

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
}

function heapSort(array) {
    // turn array into heap
    for (i = array.length - 1; i >= 0; i--) {
        heapify(array, array.length, i);
    };

    // create sorted region, shifting root vals into it & heapsorting remaining
    for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
        // since we have already turned the array into a heap, we know that the head is the max value
        // and we want to put it into our sorted region
        swap(array, endOfHeap, 0); // always swap the end of the heap with the first of the array
        heapify(array, endOfHeap, 0);
    }
    return array;
}

console.log(heapSort([50, 20, 10, 51, 99, 12, 2], 6, 0))