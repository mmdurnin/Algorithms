// Write a method `factorial(n)` which takes a number and returns the factorial of n.
// A factorial is the product of all whole numbers between 1 and n, inclusive.
// For example, `factorial(5)` is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(n) {
    if (n <= 1) return 1;

    return n * factorial(n - 1)
}

//Complexity: O(n) --> A recursive call is made n times

// Write a method fib(n) that takes in a number and returns the nth number of
// the fibonacci sequence.
//
// In the fibonacci sequence, the 1st number is 1 and the 2nd number is 1. To generate the
// next number in the sequence, we take the sum of the previous two fibonacci numbers.
// For example the first 5 numbers of the fibonacci sequence are `1, 1, 2, 3, 5`

function fib(n) {
    //fib(1) = 1 --> [1]
    //fib(2) = 1 --> [1, 1]
    //fib(3) = 2 --> [1, 1, 2]
    //fib(4) = 3 --> [1, 1, 2, 3]

    if (n === 1) return 1;
    if (n === 2) return 1;

    const f1 = fib(n - 1)
    const f2 = fib(n - 2)

    return f1 + f2
};

// console.log(fib(5)) --> 5
// Complexity: O(2^n) --> More than one recursive call on each stack (2 recursive calls per stackframe)
// Think of it as a tree. The tree is length n, but at each node, you see that it divides into 2 more nodes