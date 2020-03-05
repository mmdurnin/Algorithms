// given an array that represents a range, return a count of all numbers
// that are unique (e.g.: 12, 163 ARE unique; 88, 22, 101 are NOT)
// sample input: [1, 20]
// sample output: 19 (there is one non-unique number from 1-20: 11)

function rangeUniqueness(range) {
    let start = range[0] // 1
    let end = range[1] // 20
    let uniqueCount = 0;

    for (let num = start; num <= end; num++) {
        let digits = String(num).split('').map(char => Number(char))
        let counts = {}
        digits.forEach(digit => {
            if (counts[digit]) {
                counts[digit] += 1;
            } else {
                counts[digit] = 1;
            }
        })
        let unique = true;
        Object.values(counts).forEach(count => {
            if (count > 1) unique = false;
        })
        if (unique === true) uniqueCount++
    }
    return uniqueCount;
}

// console.log(rangeUniqueness([1,230]))


// X is a good number if after rotating each digit individually by 180 degrees,
//     we get a valid number that is different from X.
// Each digit must be rotated - we cannot choose to leave it alone.

// A number is valid if each digit remains a digit after rotation. 
// 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other;
// 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any
// other number and become invalid.

// Now given a positive number N, how many numbers X from 1 to N are good ?

//     Example :
//     Input: 10
// Output: 4
// Explanation:
// There are four good numbers in the range[1, 10] : 2, 5, 6, 9.
// Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.
//     Note:

// N  will be in range[1, 10000].

// create count = 0
// keep a key that stores all numbers who are still numbers when flipped 2, 5, 6, 9 
// keep a key of numbers that we DO NOT want: 3, 4, 7
// iterate through the range and split each number with new Set(__.toString().split(''))
// HELPER:
// ask if !set.includes any numbers we don't want, then if set.includes any numbers we do want
// - if both conditions are met, we'll increment our count
// return count

// other notes: range is inclusive
// always positive
function rotatedDigits(number) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    count += checkValidity(i)
  }

  return count;
}

function checkValidity(number) {
  let valids = new Set([2, 5, 6, 9])
  let invalids = new Set([3, 4, 7])
  let increment = false;
  
  let splitNum = number.toString().split('')
  for (let i = 0; i < splitNum.length; i++) {
    let n = Number(splitNum[i]);

    if (invalids.has(n)) {
      return 0;
    };

    if (valids.has(n)) {
      increment = true;
    }
  }

  return increment === true ? 1 : 0;
};

// console.log(rotatedDigits(9837))

function secondCounter(start=1,end=5) {
    if (end === start) return;
    setTimeout(() => {
        console.log(start);
        secondCounter(start + 1,end)
    }, 1000)
}

secondCounter(5,13)