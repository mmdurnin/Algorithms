// heapify builds a max heap (max heap for k smallest, min heap for k largest)
function heapify(arr, i, l) {
  let leftIdx = i * 2 + 1; let rightIdx = i * 2 + 2;
  let leftVal = arr[leftIdx]; let rightVal = arr[rightIdx];

  // We only want to swap values between indices i and l. Here we ask if left/right idx are greater than l
  // If that is the case, we set up our values to not meet the condition that warrants a swap
  if (leftIdx > l) leftVal = arr[i] - 1; 
  if (rightIdx > l) rightVal = arr[i] - 1;

  // If arr[i] is greater than val to its right and val to its left, we're done
  if (arr[i] > leftVal && arr[i] > rightVal) return arr;

  // If arr[i] is less than left || right, swap it with the larger of the two
  let pivot = (leftVal > rightVal) ? leftIdx : rightIdx;
  swap(arr, i, pivot);

  // continue building heap by swapping child values
  heapify(arr, pivot, l);
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}

function makeHeap(arr, k) {
  let l = k;
  while (l >= 0) {
    swap(arr, 0, l)
    heapify(arr, l, k-1)
    l--;
  }
  return arr;
}

function kSmallest(arr, k) {
  arr = makeHeap(arr, k)

  for (let i = k; i < arr.length; i++) {
    let num = arr[i]; let heapCap = arr[0];

    if (num < heapCap) {
      swap(arr, 0, i);
      heapify(arr, 0, k - 1)
    }
  }
  return arr.slice(0, k)
}

// console.log(makeHeap([1, 3, 2, 4, 3, 6], 5))
console.log(kSmallest([1, 3, 2, 4, 3, 6, 21, 0, 42, -12, 1], 4)) // -12, 0, 1, 1