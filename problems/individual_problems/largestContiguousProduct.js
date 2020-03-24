/** https://leetcode.com/problems/maximum-product-subarray/

 * Given an integer array nums, find the contiguous subarray within an array
 * (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

Input: [0,2]
Output: 2

*/

function maxProduct(arr, reverse=false) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  let maxPosProduct = 1;
  let negProduct = null;
  let negIdx = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let maxSubProduct = Math.max(maxProduct(arr.slice(0, i)), maxProduct(arr.slice(i+1)))
      return Math.max(0, maxSubProduct)
    } else if (!!negProduct) {
      if (arr[i] < 0) {
        maxPosProduct = arr[i] * negProduct * maxPosProduct;
        negProduct = null;
        negIdx = null;
      } else {
        negProduct *= arr[i]
      }
    } else {
      if (arr[i] < 0) {
        negProduct = arr[i]
        negIdx = i
      } else {
        maxPosProduct *= arr[i]
      }
    }
  }

  if (!!negProduct) negProduct /= arr[negIdx]
  let result = negProduct > maxPosProduct ? negProduct : maxPosProduct

  if (reverse === true) {
    return result
  } else {
    let reversed = maxProduct(arr.reverse(), true)
    return Math.max(result, reversed)
  }
}

console.log(maxProduct([2, 3, -2, 4]))
console.log(maxProduct([2, 0, -2, 4]))
console.log(maxProduct([-4, -3]))
