function diagonalDifference(arr) {
    let start = 0;
    let end = arr.length - 1;
    this.leftTotal = 0;
    this.rightTotal = 0;

    let that = this;

    for (let i = 0; i < arr.length; i++) {
        that.leftTotal += arr[i][start]
        that.rightTotal += arr[i][end]

        start += 1
        end -= 1
    }


    return Math.abs(leftTotal - rightTotal);
}

// console.log(diagonalDifference([11, 2, 4], [4, 5, 6], [10, 8, -12]))

function plusMinus(arr) {

    let counts = count(arr);
    console.log(counts[1] / counts[3]);
    console.log(counts[0] / counts[3]);
    console.log(counts[2] / counts[3]);

    function count(arr) {
        let negCount = 0
        let posCount = 0
        let zCount = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) negCount += 1
            if (arr[i] > 0) posCount += 1
            if (arr[i] === 0) zCount += 1
        }

        return [negCount, posCount, zCount, arr.length]
    }

}

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]))

function staircase(n) {
    let str = new Array(n+1).join(" ")
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


function miniMaxSum(arr) {
    let sum = getSum(arr);
    let min = sum;
    let max = 0;

    function getSum(arr) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum;
    }

    for (let i = 0; i < arr.length; i++) {
        let temp = sum - arr[i];
        if (temp < min) min = temp;
        if (temp > max) max = temp;
    }

    return [min, max]
}

// console.log(miniMaxSum([1, 2, 3, 4, 5]))

//convert input to military time
function timeConversion(s) {
    const convert = (s[s.length - 2] === "P") ? true : false

    s = s.slice(0, s.length - 2)
    let splitTime = s.split(":")
    let temp = splitTime[0]
    if (!!convert && temp !== "12") {
        temp = parseInt(temp) + 12
    }
    if (!convert && temp === "12") {
        temp = "00"
    }

    temp = temp.toString();
    splitTime.shift()
    splitTime.unshift(temp);
    return splitTime.join(":")
}

// console.log(timeConversion("07: 05: 45PM"))
// console.log(timeConversion("12: 05: 45PM"))
// console.log(timeConversion("12: 05: 45AM"))




/*
Write a function that takes an array and a target sum. If two numbers added together = the target sum, return the 
two numbers in an array, else return an empty array.

*/
function twoNumberSum(array, targetSum) {
    let visited = {};
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        let remainder = targetSum - num;

        if (!!visited[remainder]) return [remainder, num]
        !!visited[num] ? visited[num].push(i) : visited[num] = i;
    }
    return []
}

// console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17))



// roman numerals exercise
var romanToInt = function (s) {
    // store conversion key (e.g., {"I": 1, "V": 5 ...})
    // store a state that is either "add" or "subtract"
    // read from right to left
    // add 1, 5, 10, 50, 100, 500, 1000 depending on key if state is "add"
    // subtract if state = "subtract"
    // change state to "add"
    // set conditionals for changing state to subtract (if current === "X" and next === "I", change state to "subtract")

    let result = 0;
    let key = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let marker = "add"
    for (let i = s.length - 1; i >= 0; i--) {
        let char = s[i];
        let value = key[char];
        if (marker === "add") result += value;
        if (marker === "subtract") result -= value;

        if (i > 0) {
            marker = "add";
            let compareChar = s[i - 1];
            if ((char === "V" || char === "X") && compareChar === "I") marker = "subtract";
            if ((char === "L" || char === "C") && compareChar === "X") marker = "subtract";
            if ((char === "D" || char === "M") && compareChar === "C") marker = "subtract";
        }
    }
    return result;
};

console.log(romanToInt("III"))