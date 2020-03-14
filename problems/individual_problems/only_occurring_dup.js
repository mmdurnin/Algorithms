/*
For an array of integers 1 - 100 where all elements appear once except one that appears twice, find the repeat.
*/

function onlyOccurringDup(arr) {
  // get sum of 100 & get sum of arr
  let sum = 0;
  let arrSum = 0;

  for (let i = 1; i <= 101; i++) {
    sum += i;
    arrSum += arr[i];
  };

  // return the difference
  return arrSum - sum;
}