function maxNonAdjacentSum(arr) {
  let tabs = new Array(arr.length).fill(0);
  tabs[0] += arr[0];
  tabs[1] += Math.max(arr[0], arr[1])

  for (let i = 2; i < arr.length; i++) {
    let num = arr[i];
    let prevSum = tabs[i - 1];
    let currentSum = tabs[i - 2] + num;
    tabs[i] = Math.max(prevSum, currentSum);
  }

  return tabs[tabs.length - 1];
}

console.log(maxNonAdjacentSum([12, 200, 1, 2, 500])) //700