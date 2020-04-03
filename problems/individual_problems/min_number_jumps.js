/*
You are given a non-empy array of integers. Each element represents
the maximum number of steps you can take forward.
For example, if the element at index 1 is 3, you can go from index 1
to index 2, 3, or 4. Write a function that returns the minimum number of jumps 
needed to reach the final index. 
Not that jumping from index i to index i + x always constitutes 1 jump, 
no matter how large x is.

ex:
input: [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]
output: 4
explanation: 3 --> 2 --> 2 --> 7 --> 3 or 3 --> 4 --> 2 --> 7 --> 3, etc
*/



function jump(arr, jumps = 1) {
  if (arr.length <= 1) return jumps;
  if (arr[0] === 0) return Infinity;
  
  let length = arr[1], possibilities = [];
  for (let i = 1; i <= length; i++) {
    let nextJump = arr.slice(i);
    let result = jump(nextJump, jumps+1)
    possibilities.push(result)
  }
  return Math.min(...possibilities);
}

// function minJump(arr) {
//   let jumps = 0;
//   for (let i = 0; i < arr.length; i+=0) {
//     let length = arr[i];
//     let range = arr.slice(i + 1, i + length + 1);
//     let distances = range.map((el, i) => {
//       return el - (range.length - i - 1)
//     })
//     jumps++
//     let max = Math.max(distances)
//     i += distances.indexOf(max) + 1
//   }
//   return jumps;
// }

function jumpCount(arr) {  // [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]
  let jumps = 0;
  for (let i = 0; i < arr.length - 1; i += 0) {  // i=0
    const num = arr[i];  // num = 3
    let options = arr.slice(i + 1, i + num + 1); // [4,2,1]
    // console.log(options)
    let distances = options.map((option, i, inner) => {   // 2, 1, 1
      // inner = options (the array being iterated over)
      return option - (inner.length - i - 1) // maps how far beyond range the jump will lead
    })
    // console.log(distances);

    jumps += 1;
    let max = Math.max(...distances)
    i += distances.indexOf(max) + 1;
  }
  return jumps;
}

console.log(jumpCount([3, 4, 2, 1, 2]))
console.log(minJump([3, 4, 2, 1, 2]))
// console.log(jump([3, 4, 2, 1, 2]))
// console.log(jump([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]))