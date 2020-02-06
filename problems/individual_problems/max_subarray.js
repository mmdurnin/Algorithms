// leetcode

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

console.log(maxSubArray([-2, 1, -3, -3, -3, -3, 0, 2, 2, 2, -1, 2, 1, -5, 4]))
// [-2, 1, -12, 6, -1, 3, -5, 4]
console.log(maxSubArray([-2, -1]))