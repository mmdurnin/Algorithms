// leetcode

// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to 
// the product of all the elements of nums except nums[i].

var productExceptSelf = function (nums) {
    let left = 1
    for (i = 0; i < nums.length; i++) {
        let arr = []
        arr.push(left)
        left *= nums[i]
        arr.push(nums[i])
        arr.push(left)
        nums[i] = arr
    }
    let right = 1
    let middle = 1
    for (i = nums.length - 1; i >= 0; i--) {
        let arr = nums[i];
        left = arr[0]
        middle = left * right
        right *= arr[1]
        nums[i] = middle;
    }
    return nums;
};

console.log(productExceptSelf([1, 2, 3, 4])) // [24, 12, 8, 6]
console.log(productExceptSelf([5, 2, 3, 4])) // [24, 60, 40, 30]
console.log(productExceptSelf([0, 2, 3, 4])) // [24, 0, 0, 0]