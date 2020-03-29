/*
Given two integers "dividend" and "divisor", divide two integers without using multiplication, division,
and mod operator.

Return the quotient after dividing "dividend" by "divisor".

The integer division should truncate toward zero, which means losing its fractional part. 
For example:
  truncate(8.345) = 8 and truncate(-2.7335) = -2

Examples:
  dividend: 10, divisor: 3
  output: 3
  explanation: 10/3 = truncate(3.33333...) = truncate(3) = 3

  dividend: 7, divisor: -3
  Output: -2
  explanation: 7/-3 = truncate(-2.33333...) = truncate(-2)

Notes: 
•The divisor will never be 0
•Both dividend and divisor will be 32-bit signed integers
•Assume we are dealing with an environment which could only store integers within the 32-bit signed integer
  range (-2**32, 2**31-1)

*/

// function divideTwo(dividend, divisor) {
//   let charge;
//   if (dividend < 0 || divisor < 0) charge = "-";
//   if ((dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0)) charge = "+";

//   let dvd = Math.abs(dividend), dvs = Math.abs(divisor);
//   let limit = Math.pow(2, 31);

//   let count = 0;
//   while (dvd > dvs) {
//     dvd -= dvs;
//     count++
//   };

//   result = (charge === "-") ? (count * -1) : count;
//   if (count > (2 ** 31 - 1)) {
//     result = result < 0 ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
//   };
//   return result;
// };

var divideTwo = function (dividend, divisor) {
  let charge;
  if (dividend < 0 || divisor < 0) charge = "-";
  if ((dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0)) charge = "+";

  let dvd = Math.abs(dividend), dvs = Math.abs(divisor);


  let count = 0;
  while (dvd >= dvs && count < limit) {
    dvd -= dvs;
    count++
  };

  result = (charge === "-") ? (count * -1) : count;
  if (result > 2147483647) return 2147483647;

  return result;
};

console.log(divideTwo(7, -3));
console.log(divideTwo(-2147483648,- 1));
console.log(divideTwo(-2147483648, 2))