/*
Given an array "nums" of n integers and an integer "target", are there elements:: a, b, c, and d in nums
such that  a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
Note: the solution set must not contain duplicate quadruplets.

Ex: nums = [1, 0, -1, 0, -2, 2], target = 0
    Solution: [
      [-1,  0, 0, 1],
      [-2, -1, 1, 2],
      [-2,  0, 0, 2]
    ]
*/

function fourSum(arr, target) {
  let result = [];
  arr = arr.sort((a, b) => a-b);

  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] === arr[i-1]) continue;
    let ref1 = arr[i];
    for (let j = i+1; j < arr.length - 2; j++) {
      if (j > i+1 && arr[j] === arr[j-1]) continue;
      let ref2 = arr[j];

      let sum1 = ref1 + ref2;

      let startIdx = j+1;
      let endIdx = arr.length - 1;
      while (startIdx < endIdx) {
        if ((startIdx !== j+1) && (endIdx !== arr.length - 1) && (arr[startIdx] === arr[startIdx - 1]) && (arr[endIdx] === arr[endIdx + 1])) {
          startIdx++;
          continue;
        }

        let startNum = arr[startIdx], endNum = arr[endIdx];
        let sum2 = startNum + endNum;

        if (sum1 + sum2 === target) {
          result.push([ref1, ref2, startNum, endNum])
          startIdx++;
          endIdx--;
        } else if (sum1 + sum2 < target) {
          startIdx++;
        } else {
          endIdx--;
        }
      }
    }
  }

  return result;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
console.log(fourSum([-1, 0, -5, -2, -2, -4, 0, 1, -2], - 9)) //[[-5,-4,-1,1],[-5,-4,0,0],[-5,-2,-2,0],[-4,-2,-2,-1]]