// Maximum Subset Sum With No Adjacent Elements
// Write a function that takes in an array of positive integers and returns an
// integer representing the maximum sum of non - adjacent elements in the array.
// If a sum cannot be generated, the function should return 0.
// Sample input: [75, 105, 120, 75, 90, 135]
// Sample output: 330(75, 120, 135)
// [] => 0
// [75] => 75
// [75, 180] => 180


/*
[1, 2, 1000, 200, 1, 10000] = 11,001

Sample input: [75, 105, 120, 75, 90, 135]
Sample output: 330(75, 120, 135)

[56, 1, 1, 1, 200, 90, 8]

sum = 56 + recursive [1, 1, 200, 90, 8]
  1 + [200, 90, 8]
  0 + [1, 200, 90, 8]
sum = 0 + recursive [1, 1, 1, 200, 90, 8]
  1 + [1, 200, 90, 8]
  0 + [1, 1, 200, 90, 8]

1. base case = arr.length === 2 return max
                          === 1 return arr[0]
2. create sum1 = arr[0]
   create sum2 = 0
sum 1 += recursion(arr.slice(2))
sum 2 += recursion(arr.slice(1))
3. return math.max(sum1, sum2)
*/

function maxSubSum(arr) { // [3, 90, 1]
  if (arr.length < 1) return 0;
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return Math.max(arr[0], arr[1]);

  let sum1 = arr[0], recursion1 = maxSubSum(arr.slice(2)); // 3 : 1
  sum1 += recursion1;                                 // 4
  let sum2 = 0, recursion2 = maxSubSum(arr.slice(1)); // 0 : 90
  sum2 += recursion2;                         // 90

  return Math.max(sum1, sum2);  //90
}

console.log(maxSubSum([75, 105, 120, 75, 90, 135]))

// Braeden: use tabulation
function nonAdjacentSubSumIter(numbers) {
  //  [75, 105, 120, 75, 90, 135]
  let sums = new Array(numbers.length).fill(0);
  // [75, 105, 195, 195, 285, 330]
  sums[0] += numbers[0];
  sums[1] += math.max(numbers[0], numbers[1]);
  for (let i = 2; i < numbers.length; i++) { // 5
    let curNum = numbers[i]; // 135
    let potential = sums[i - 2] + curNum; // 330
    sums[i] = Math.min(potential, sums[i - 1]);
  }
  return sums[sums.length - 1];
}