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
// console.log(maxSubArray([-2, -1]))

// three sum 

var threeSum = function (nums) {
    let target = 0;
    let sorted = mergeSort(nums);

    let result = new Set();

    let ref = null;
    console.log(sorted);

    for (i = 0; i < sorted.length; i++) {
        if (!!ref && sorted[i] === ref) i++;

        ref = sorted[i];
        let startIdx = i + 1;
        let endIdx = sorted.length - 1;
        while (startIdx < endIdx) {
            let lNum = sorted[startIdx];
            let rNum = sorted[endIdx];
            let tempSum = ref + lNum + rNum;

            if (tempSum === target) {
                result.add([ref, lNum, rNum]);
                startIdx++;
                endIdx--;
            } else if (tempSum < target) {
                startIdx++;
            } else {
                endIdx--;
            }
        }

        if (sorted[i] > target) return result;
    }
    return Array.from(result);
};

var mergeSort = function(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);
    return sort(leftSorted, rightSorted);
}

var sort = function(left, right) {
    let sorted = [];
    while (left.length && right.length) {
        (left[0] < right[0]) ? sorted.push(left.shift()) : sorted.push(right.shift())
    }
    return sorted.concat(left, right)
}


// console.log(threeSum([-1, 0, 1, 2, -1, -4], 0))

// write a function for solving a sudoku puzzle

var solveSudoku = function (board) {
    // for each box
    // if place is empty
    // count from 1-9 through box
    // count from 1-9 horizontally
    // count from 1-9 vertically
    // if only a singly number is unaccounted for --> place = unaccounted number

    let top = board.slice(0, 3);
    let mid = board.slice(3, 6);
    let bottom = board.slice(6);

    // squares
    let q1 = subSlice(0, 3, top);
    let q2 = subSlice(3, 6, top);
    let q3 = subSlice(6, 9, top);
    let q4 = subSlice(0, 3, mid);
    let q5 = subSlice(3, 6, mid);
    let q6 = subSlice(6, 9, mid);
    let q7 = subSlice(0, 3, bottom);
    let q8 = subSlice(3, 6, bottom);
    let q9 = subSlice(6, 9, bottom);

    // horizontal = outer ([*][])
    // vertical = inner ([][*])

    // helper function goes through matrix until it gets a "hit", return new matrix with hit
    // if not "hit", return false
    // keep calling function until returns false

    let squares = [q1, q2, q3, q4, q5, q6, q7, q8, q9];

    console.log(replaceTile(board, squares))
    
    function replaceTile(board, squares) {
        let h = 0;
        let v = 0;
        let outerCount = 0;

        let innerMin = 0;
        let innerMax = 3;

        let outerMin = 0;
        let outerMax = 3;

        let altered = false;

        for (let i = 0; i < squares.length; i++) {
            let square = squares[i];
            while (h < outerMax) {
                v = innerMin;
                while (v < innerMax) {
                    if (board[h][v] === ".") {
                        let replacement = search(h, v, square, board);
                        if (!!replacement) board[h][v] = replacement;
                        return board;
                    }
                    v++;
                }
                h++;
            }
            if (outerCount < 2) {
                h = 0;
                innerMin += 3;
                innerMax += 3;
                outerCount++;
            } else {
                v = 0;
                innerMin = 0;
                innerMax = 3;
                outerMin += 3;
                outerMax += 3;
                outerCount = 0;
                h = outerMin;
            }
        }

        return (!!altered) ? matrix : false;
    }

    function search(h, v, square, board) {
        let temp = []
        let i = 0;
        let horizontal = board[h];
        let vertical = [];
        for (sub = 0; sub < 9; sub++) {
            vertical.push(sub[v])
        }

        while (i < 9) {
            let target = i.toString();
            if (square.includes(target) || horizontal.includes(target) || vertical.includes(target)) {
                i++;
            } else {
                temp.push(target);
                i ++;
            }
        }
        if (temp.length === 1) {
            return temp[0];
        } else {
            return false;
        }
    }

    function subSlice(start, finish, matrix) {
        let arr = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = start; j < finish; j++) {
                arr.push(matrix[i][j])
            }
        }
        return arr;
    }
};

// console.log(solveSudoku(
//     [["5", "3", ".", ".", "7", ".", ".", ".", "."], 
//      ["6", ".", ".", "1", "9", "5", ".", ".", "."], 
//      [".", "9", "8", ".", ".", ".", ".", "6", "."], 
//      ["8", ".", ".", ".", "6", ".", ".", ".", "3"], 
//      ["4", ".", ".", "8", ".", "3", ".", ".", "1"], 
//      ["7", ".", ".", ".", "2", ".", ".", ".", "6"], 
//      [".", "6", ".", ".", ".", ".", "2", "8", "."], 
//      [".", ".", ".", "4", "1", "9", ".", ".", "5"], 
//      [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))


var findClosestElements = function (arr, x, k) {
    if (x === -1) x = arr[arr.length - 1];

    let targetIdx = findX(arr, x);
    let right = arr.slice(targetIdx + 1).length;
    let left = arr.slice(0, targetIdx).length;

    let leftLength = Math.ceil(k / 2);
    let rightLength = Math.floor(k / 2);

    if (left <= leftLength) {
        let diff = leftLength - left;
        rightLength += diff;
    } else if (right <= rightLength) {
        let diff = rightLength - right;
        leftLength += diff;
    };

    let startIdx = targetIdx - leftLength;
    let endIdx = targetIdx + rightLength;

    let array = [];
    for (i = startIdx; i <= endIdx; i++) {
        array.push(arr[i]);
    }
    return array;
};

function findX(arr, x) {
    if (arr.length === 0) return;
    if (arr.length === 1 && arr[0] !== x) return;
    if (arr.length === 1 && arr[0] === x) return 1;

    let mid = Math.floor(arr.length / 2);
    if (arr[mid] === x) {
        return mid;
    }

    let left = arr.slice(0, mid);

    if (arr[mid] > x) {
        return findX(left, x);
    } else {
        let right = arr.slice(mid + 1);
        return mid + findX(right, x);
    }
}

// console.log(findX([1, 2, 3, 4, 5, 6, 7], 5));

// console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));

// Given an unsorted integer array, find the smallest missing positive integer.
// input: array of unsorted integers
// output: number = first positive number missing from the array
