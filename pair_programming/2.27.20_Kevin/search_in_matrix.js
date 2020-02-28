/*
You are given a two-dimensional array(matrix)  of distinct integers.
Each row is sorted and each column is also sorted
The matrix does not necessarily have the same height and width
You are also given a target number, and you must write a function that returns an array
of the row and column indices of the target number
if it is contained in the matrix and [-1, -1] if it is not contained in the matrix

sample input:
[
  [1,  4,   7,   12,  15,  1000],
  [2,  5,   19,  31,  32,  1001],
  [3,  8,   24,  33,  35,  1002],
  [40, 41,  42,  44,  45,  1003],
  [99, 100, 103, 106, 128, 1004]
], 44
sample output: [3, 3]
*/

// binary search style
// iterate through input array rows
// split rows into half and compare target number
// if target is less than left most value on right side
  // split right side into two and repeat
// vice-versa for left side

const twoDBsearch = (array, target) => {
  let firstIdx, secondIdx;
  array.forEach((row, idx) => {
    secondIdx = bSearch(row, target);
    if (secondIdx) firstIdx = idx;
  });

  return [firstIdx, secondIdx];
};

const bSearch = (array, target) => {
  if (!array.length) return null;
  if (array.length === 1) {
    if (array[0] === target) return 1;
    return null;
  }

  const midIdx = Math.ceil(array.length/2);
  const middleVal = array[midIdx];

  if (middleVal === target) return midIdx;

  let newArr;
  if (middleVal > target){
    newArr = array.slice(0, midIdx);
    return bSearch(newArr, target);
  } else{
    newArr = array.slice(midIdx + 1);
    console.log(newArr);
    let right = bSearch(newArr, target);
    return (!!right) ? right + midIdx + 1 : null;
  }
};

console.log(bSearch([1, 4, 7, 12, 15, 1000], 15));
