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

    // console.log(replaceTile(board, squares))

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
                i++;
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




// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100

// function minChange(coins, amount, memo = {}) {
//     if (amount === 0) return 0;
//     // if (coins.includes(amount)) return 1;

//     let numCoins = [];
//     coins.forEach((coin) => {
//         numCoins.push(minChange(coins, amount - count) + 1);
//     });


// }

function minChange(coins, amount, memo = {}) {
    if (amount === 0) return 0;
    if (coins.includes(amount)) return 1;

    let coin_count = 0;

    for (let i = coins.length - 1; i >= 0; i--) {
        if (amount > coins[i]) {
            amount -= coins[i];
            coin_count = coin_count + minChange(coins, amount, memo);
            console.log(coin_count)
            return coin_count;
        }
    }
}

// console.log(minChange([1, 5, 10, 25], 100))





function staircase(n) {
    let str = new Array(n + 1).join(" ")
    for (let i = 0; i < n; i++) {
        str = str.slice(1).concat("#")
        console.log(str)
    }

}

// staircase(6)
/* (output)
     #
    ##
   ###
  ####
 #####
######
 */


function plusMinus(arr) {

    let counts = count(arr);
    console.log(counts[1] / counts[3]); // number of positives / arr.length
    console.log(counts[0] / counts[3]); // number of negatives / arr.length
    console.log(counts[2] / counts[3]); // number of 0s / arr.length

    function count(arr) {
        let negCount = 0
        let posCount = 0
        let zCount = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) negCount += 1
            if (arr[i] > 0) posCount += 1
            if (arr[i] === 0) zCount += 1
        }

        console.log(negCount)
        console.log(posCount)
        console.log(zCount)
        console.log(arr.length)
        return [negCount, posCount, zCount, arr.length]
    }

}

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]))
// console.log("***")

// I don't remember what this function was trying to do...
function mergeSort(array) {
  if (array.length < 2) return array;
  let midIdx = Math.floor(array.length / 2);
  let left = array.slice(0, midIdx);
  let right = array.slice(midIdx);

  console.log(array)
  console.log(left)
  console.log(right)

  let leftSort = mergeSort(left);
  let rightSort = mergeSort(right);
  return merge(leftSort, rightSort);
}

function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
    console.log("***")
    arr.push(left[0] > right[0] ? right.shift() : left.shift());
    }
    console.log(arr.concat(left, right))
    return arr.concat(left, right);
}

// console.log(mergeSort([5, 1, 3, 10, 4, 2]))

function cook() {

    let food = [];
    return function(str) {
        if (str[1] === "u") {
            console.log(`the beast doesnt like ${str}`)
        } else {
            console.log(`yum Yum YUM! The beast loves ${str}`)
            food.push(str)
        }
        console.log(`the beast has eaten: ${food.join(', ')}`)
    }
}

let feedCiara = cook()
feedCiara('strawberries')
feedCiara('mushrooms')
// maureen.feedTheBeast('strawberries')