// Write a recursive function, `binarySearch(sortedArray, target)`, that returns
// the index of `target` in `sortedArray`, or -1 if it is not found. Do NOT use
// the built-in `Array.prototype.indexOf` or `Array.prototype.includes` methods 
// in your implementation.
//
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.
 function binarySearch(arr, target) {
   if (arr.length < 2) {
     if (arr.length < 1) return -1;
     return (arr[0] === target) ? 1 : null;
   };

   const midIdx = Math.floor(arr.length / 2)
   if (arr[midIdx] === target) return midIdx;

   if (target < arr[midIdx]) {
     return binarySearch(arr.slice(0, midIdx), target)
   } else {
     let rightSearch = binarySearch(arr.slice(midIdx), target);
     return (rightSearch > 0) ? midIdx + rightSearch : -1;
   }
 }

 console.log(binarySearch([1, 2, 3, 4, 5], 3))