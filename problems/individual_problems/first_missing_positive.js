// leetcode

// Given an unsorted integer array, find the smallest missing positive integer.
// input: array of unsorted integers
// output: number = first positive number missing from the array

var firstMissingPositive = function (nums) {
    nums = mergeSort(nums)
    let count = 1
    for (let i = 0; i < nums.length; i++) {
        console.log(i)
        console.log(count)
        if (nums[i] > 0 && nums[i] !== count) {
            console.log(nums)
            console.log(nums[i])
            console.log(count)
            return count
        };
        if (nums[i] > 0 && nums[i] === count) count++;
        if (nums[i] > 0 && nums[i + 1] === nums[i]) count--;
    };
    return count;
};

function mergeSort(nums) {
    if (nums.length < 2) return nums;

    let midIdx = Math.floor(nums.length / 2);
    let left = nums.slice(0, midIdx);
    let right = nums.slice(midIdx);


    let leftSort = mergeSort(left);
    let rightSort = mergeSort(right);


    return sort(leftSort, rightSort);
}

function sort(left, right) {
    let merged = [];

    while (left.length && right.length) {
        merged.push(left[0] > right[0] ? right.shift() : left.shift());
    }

    return merged.concat(left, right);
}

// console.log(firstMissingPositive([1, 2, 0]))
console.log(firstMissingPositive([2, 1, 0]))