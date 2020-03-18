/*
You are given a two-dimensional array(matrix)  of distinct integers.
Each row is sorted and each column is also sorted
The matrix does not necessarily have the same height and width
You are also given a target number, and you must write a function that returns an array
of the row and column indices of the target number
if it is contained in the matrix and [-1, -1] if it is not contained in the matrix

sample input:
[
  [1,  4,   7,   12,  15,  1000],
  [2,  5,   19,  31,  32,  1001],
  [3,  8,   24,  33,  35,  1002],
  [40, 41,  42,  44,  45,  1003],
  [99, 100, 103, 106, 128, 1004]
], 44
sample output: [3, 3]
*/







/*
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

*/






/*
Given n paris of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n=3, a solution set is:
[
  "((()))",
  "()()()",
  "(()())"
  "()(())"
]


when n=1 =>  ["()"]

when n = 2 => ["()()","(())"]

["()()()","()(())","(()())","((()))"]

base case: when n=1 =>  ["()"]

store value of recursive call with n-1
    iterate through
    for each combination add "()" to beginning and also add "(" to begin and ")" to end
    return new combinations
*/

function possibleParens(n) {                    // n=3 
  if (n===0) return [];
  if (n===1) return ["()"];

  let combinations = [];                       //   ["((()))","()(())",]
  let nextStep = possibleParens(n - 1);        //   ["(())","()()"]   

  for (let i = 0; i < nextStep.length; i++) {
    const combo = nextStep[i];
    let ver1 = "()" + combo;                   //  "()()()"    
    let ver2 = "(" + combo + ")"               //  "(()())"
    combinations.push(ver1,ver2)
  }

  return combinations;
}

// console.log(possibleParens(3))


/*
Given a binary tree, return the value of the bottom let node.
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

/*
     7
  9     10
    6  3   9
*/

// input = root
// output = node.val (most bottom, left)
// dps
// base: if !this.left && !this.right -- return this.val
// if (this.left) recurse on left, if not this.left, recurse on right

// leftMostNode = null;
// count = 0
// bfs
// queue of nodes, [[count, node]]
// if tempcount > count, replace count and leftmostdeepestnode

function deepestLeftNode(root) {
  let node;
  let queue = [root]; 

  while (queue.length) {
    node = queue.shift();
    
    if (node.right) queue.push(node.right);
    if (node.left) queue.push(node.left);
  }

  return node.val;
}