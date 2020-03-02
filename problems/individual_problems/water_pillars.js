/*
Each number in the array represents a pillar. Imagine water is poured into the array between pillars. 
Write a function that returns the max surface area of water between pillars
(height * width)
*/

// function waterArea(heights) {
//   let left = 0;
//   let right = heights.length - 1;
//   let max = 0;

//   while (left < right) {
//     let height = Math.min(heights[left], heights[right]);
//     let width = right - left;
//     let temp = height * width;

//     max = max < temp ? temp : max;

//     if (heights[left] < heights[right]) {
//       left += 1;
//     } else if (heights[right] < heights[left]) {
//       right -= 1;
//     } else {
//       left += 1;
//       right -= 1;
//     }
//   }

//   return max;
// } // only returns max water between two pillars, but in a real world scenario, a taller tower in the middle
    // of two towers will change the water amounts

console.log(waterArea([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]))
console.log(waterArea([0,1, 1, 0]))
console.log(waterArea([0, 1, 2, 1, 1]))