/*
Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. 
Here a k-diff pair is defined as an integer pair (i, j), 
where i and j are both numbers in the array and their absolute difference is k.
*/

/*
input: [1, 2, 3, 4, 5, 6, 7], 2
output: 5
explanation: [[1, 3], [2, 4], [3, 5], [4, 6], [5, 7]]

steps: 
0. set up: create a count variable equal to 0
1. create a set from the input array so that we're only checking unique numbers
2. iterate through unique numbers
3. at each iterative step, add k and check for result (arr[i] + k) in set
   - if it's included, increment count
*/

function kDiffPairs(arr, k) {
  let count = 0;
  let uniques = new Set(arr);
  let uniquesArray = Array.from(uniques);

  if (k === 0) return countMults(arr);
  if (k < 0) return 0;

  for (let i = 0; i < uniquesArray.length; i++) {
    let num = uniquesArray[i];
    let targetNum = num + k;
    if (uniques.has(targetNum)) count++;
  };

  return count;
};

function countMults(arr) {
  let mults = new Set();
  let store = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num in store) {
      mults.add(num);
    } else {
      store[num] = true;
    }
  }

  return mults.size;
}

console.log(kDiffPairs([1, 2, 3, 4, 5, 6, 7], 3))
console.log(kDiffPairs([3, 1, 4, 1, 5], 2))
console.log(kDiffPairs([3, 1, 4, 1, 5], 0))