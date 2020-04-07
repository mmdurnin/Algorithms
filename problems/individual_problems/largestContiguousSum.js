/*
1. check if array is ALL negative - if so, return largest int
2. (the rest assumes there are positives) - group contiguous pos & negs
  if arr[-1] < 0, slice it off (but thats unnecessary)
3. create maxSum & create temp
4. iterate:
  5. if arr[i] < 0 && math.abs(arr[i]) > temp, start temp = 0 and continue
   --- find way to hold onto previous temp if if arr[i] < 0 && math.abs(arr[i]) < temp
  6. else temp += arr[i]
  7. if (temp > maxSum) maxSum = temp
8. return maxSum
*/

function maxContiguousSum(arr) { // -1, 5, -4, 20 = 21
  if (arr.length < 1) return null;
  if (allNeg(arr)) return Math.max(...arr)
  arr = combineSigns(arr)
  let maxSum = 0, runningSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num < 0 && runningSum + num < 0) { 
      runningSum = 0;
    } else {
      runningSum += num;
    }

    if (runningSum > maxSum) maxSum = runningSum;
  }
  return maxSum;
}

function allNeg(arr) {
  return !(arr.some((ele) => ele > 0))
}

function combineSigns(arr) {
  let stack = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let lastIdx = stack.length - 1, target = stack[lastIdx], num = arr[i];
    if ((target < 0 && num > 0) || (target > 0 && num < 0)) {
      stack.push(num)
    } else {
      stack[lastIdx] += num
    }
    if ((i === arr.length - 1) && stack[stack.length - 1] < 0) stack.pop();
  }
  return stack;
}

console.log(maxContiguousSum([-2, -1, -20]))
console.log(maxContiguousSum([]))
console.log(maxContiguousSum([-1, -1, 2, 2, -3, 4, 0, -5]))
console.log(maxContiguousSum([-1, 5, -4, 20]))
console.log(maxContiguousSum([-1, 5, -4, 29, -30, 30]))