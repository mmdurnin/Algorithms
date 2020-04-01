var divideTwo = function (dividend, divisor) {

  let charge;
  if (dividend < 0 || divisor < 0) charge = "-";
  if ((dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0)) charge = "+";

  let dvd = Math.abs(dividend), dvs = Math.abs(divisor);

  if (charge === "+") {
    if (dvs * 2147483647 < dvd) return 2147483647
  } else {
    if (dvs * 2147483648 < dvd) return -2147483648
  }

  if (divisor === 1) return dividend;
  if (divisor === -1) return dividend * -1;

  let count = 0, tempDvd = dvd, tempDvs = dvs**2;
  while (tempDvd >= tempDvs) {
    tempDvd -= tempDvs
    tempDvs *= dvs
    count += dvs
  }

  dvd -= (count * dvs)
  while (dvd >= dvs) {
    dvd -= dvs;
    count++
  };

  result = (charge === "-") ? (count * -1) : count;

  return result;
};

console.log(divideTwo(7, -3));
// console.log(divideTwo(-2147483648,- 1));
console.log(divideTwo(-2147483648, 2))
console.log(divideTwo(7, 3))

/*
  dvd = 10
  dvs = 2
  count = 1
*/