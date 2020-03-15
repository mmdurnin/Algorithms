var threeSumClosest = function (nums, target) {
  if (nums.length < 3) return 0;
  // if (nums.length === 3) return nums;

  nums = nums.sort((a, b) => a - b)
  let smallestDiff = Infinity;
  let result;

  for (let i = 0; i < nums.length - 2; i++) {
    let startIdx = i + 1, endIdx = nums.length - 1, ref = nums[i];

    while (startIdx < endIdx) {
      let tempSum = ref + nums[startIdx] + nums[endIdx];
      let tempDiff = target - tempSum;

      if (tempSum < target) {
        startIdx++;
      } else {
        endIdx--;
      }

      if (Math.abs(tempDiff) < Math.abs(smallestDiff)) {
        result = tempSum; 
        smallestDiff = tempDiff;
      }
    }
    if (smallestDiff === 0) return result;
  }
  return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1)) // 2
console.log(threeSumClosest([1, 1, 1, 0], - 100)) // 2
console.log(threeSumClosest([0, 2, 1, -3], 1)) // 0
console.log(threeSumClosest([1, 1, -1, -1, 3], - 1)) // -1
