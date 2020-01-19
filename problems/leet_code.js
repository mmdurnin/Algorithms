// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction
// (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.

// This one is expensive
// var maxProfit = function (prices) {
//     let maxDiff = 0
//     for (i = 0; i < prices.length - 1; i++) {
//         let buy = prices[i]
//         for (j = i + 1; j < prices.length; j++) {
//             let sell = prices[j]
//             let diff = sell - buy
//             if (diff > maxDiff) maxDiff = diff
//         }
//     }
//     return maxDiff
// };

// better O(n)
// var maxProfit = function (prices) {
//     let min = prices[0];
//     let maxDiff = 0;
//     for (i = 0; i < prices.length; i++) {
//         let stock = prices[i];
//         let diff = stock - min;
//         if (stock < min) {
//             min = stock;
//         } else if (diff > maxDiff) {
//             maxDiff = diff;
//         }
//     }
//     return maxDiff;
// };

isValid = function(s) {
    const left = {'(' : 1, '[' : 2, '{' : 3};
    const right = {')' : 1, ']' : 2, '}' : 3};
    let open = [];

    for (let i = 0; i < s.length; i++) {
        let symbol = s[i];
        if (!!left[symbol]) {
            open.push(symbol)
        } else if (!!right[symbol]) {
            if (open.length === 0) return false;
            let partner = open.pop();
            if (left[partner] !== right[symbol]) return false;
        }
    }

    if (open.length !== 0) return false;
    return true;
}

// console.log(isValid("(){}[]"));


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