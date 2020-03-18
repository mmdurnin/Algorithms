/*
Given n paris of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n=3, a solution set is:
[
  "((()))",
  "()()()",
  "(()())"
  "()(())"
]
*/

// this function misses a case
// function generateParens(num) {
//   if (num === 0) return [];
//   if (num === 1) return ["()"];

//   let result = new Set();
//   let variations = generateParens(num-1);

//   variations.forEach(str => {
//     let s1 = "()".concat(str)
//     let s2 = "(".concat(str, ")")
//     let s3 = str.concat("()")
//     result.add(s1)
//     result.add(s2)
//     result.add(s3)
//   });

//   return Array.from(result);
// }

// the correct solution

function generateParens(num) {
  if (num === 0) return [];

  // create array to push all result strings into
  let result = [];

  // create closure, recursive 
  // starts each string as "("
  // variable "balance" is balanced when equal to 0 (adding a "(", we increment by 1, adding a ")", we decrement by 1)
  function generate(str="(", balance=1) {
  
    // maybe we will add the string to results when we hit our base case (str.length = num * 2)
    if (str.length === num * 2) {

      // only add string to results if there are the same number of opening and closing parens
      if (balance === 0) result.push(str)

    } else {

      // if balance is greater than 1, we will add a closing paren and call recursively
      if (balance > 0) {
        generate(str.concat(")"), balance-1)
      }

      // if balance === 0 OR is greater than 1, we will add an opening paren and call recursively
      generate(str.concat("("), balance+1)
    }
  }

  generate()
  return result;
}
console.log(generateParens(3));