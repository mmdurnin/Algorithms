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

[1, 2, 3, 2, 2, -2, 4, 4, 2, 56]
maxProduct = 24
negProduct = -3584
negIdx = 5
!!negProduct? If so: 
negProduct/= arr[negIdx]
negProduct > max ? negProduct : max

!!negProduct?

Input: [2,3,-2,4,-1]
             ^

maxProduct: 48
negProduct null
negIdx



Output: 48

NOTES:
* section off 0's


STEPS:
* if !arr.length return 0
* if arr.length === 1 return arr[0]
* maxproduct (=1)
* negPrdocut = null
* negIdx = null
* loop:
  !!negIdx:
    if (arr[i] is neg)
      maxProduct = arr[i] * negProduct * maxProduct
      negIdx = null;
    else 
      negProduct *= arr[i]
  else (if !negProduct)
    if (arr[i] is neg) 
      negProduct = arr[i]
      negIdx = i
    else 
      maxProduct *= arr[i]
  maxIdx *= arr[i]
  
  controlling for 0s section:
  if (arr[i] === 0) arr1 = arr.slice(0, i), arr2 = arr.slice(i)
  return Math.max(maxProduct(arr1), maxProduct(arr2))
 */

function maxProduct(arr) {
  let maxProduct = 1;
  let negProduct = null;
  let negIdx = null;

  for (let i = 0; i < arr.length; i++) {
    if (!!negProduct) {
      if (arr[i] < 0) {
        maxProduct = arr[i] * negProduct * maxProduct;
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
        maxProduct *= arr[i]
      }
    }
  }

  if (!!negProduct) negProduct /= arr[negIdx]
  return negProduct > maxProduct ? negProduct : maxProduct
}







console.log(maxProduct([2, 3, -2, 4, -1]));  // => 48
console.log(maxProduct([1, 2, 3, 2, 2, -2, 4, 4, 2, 56])); // => 3084
console.log(maxProduct([1, 2, 20, -1, 2, -1, 4, 15, -1, 36, 350])); // => 60
// console.log(maxProduct([-2, 0, -1])); //<-- zero
