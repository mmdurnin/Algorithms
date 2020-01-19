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

// console.log(productExceptSelf([1, 2, 3, 4])) // [24, 12, 8, 6]
// console.log(productExceptSelf([5, 2, 3, 4])) // [24, 60, 40, 30]
// console.log(productExceptSelf([0, 2, 3, 4])) // [24, 0, 0, 0]



// max subarray

var maxSubArray = function (nums) {
    let stack = [nums[0]]
    let pos
    let minNeg = nums[0]

    pos = (nums[0] > 0) ? true : false

    for (i = 1; i < nums.length; i++) {
        let num = nums[i];
        if (num === 0 || (!!pos && num > 0) || !pos && num < 0) {
            stack[stack.length - 1] += num
        } else if (!!pos) {
            pos = false
            stack.push(num)
        } else if (!pos) {
            pos = true
            stack.push(num)
        }
        if (num <= 0 && num > minNeg) minNeg = num;
    }

    // if everything is negative, return the closest to 0
    // if everything is positive (or everything is 0), return the sum of all
    if (stack.length === 1) {
        return (stack[0] < 0) ? minNeg : stack[0]
    }

    
    let max = stack[0]
    let temp = stack[0]
    console.log(stack)

    for (i = 1; i < stack.length; i++) {
        console.log("we made it in the loop")
        if (stack[i] > temp && temp < 0) {
            console.log("stack[i] > temp")
            temp = stack[i];
        } else if (stack[i] < 0 && Math.abs(stack[i] > Math.abs(temp))) {
            if (temp > max) max = temp
            temp = stack[i]
        } else {
            temp += stack[i]
        }

        if (temp > max) {
            console.log("yes it is")
            max = temp;
        }
    }
    return max;
};

// console.log(maxSubArray([-2, 1, -3, -3, -3, -3, 0, 2, 2, 2, -1, 2, 1, -5, 4]))
// [-2, 1, -12, 6, -1, 3, -5, 4]
console.log(maxSubArray([-2, -1]))
