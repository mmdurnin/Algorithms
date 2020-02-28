// You have to code a function getAllPrimeFactors wich take an integer as parameter
// and return an array containing its prime decomposition by ascending factors, if
// a factors appears multiple time in the decomposition it should appear the
// same number of times in the array.
//     exemple: getAllPrimeFactors(100) returns[2, 2, 5, 5] in this order.

function getAllPrimes(number) {
  let primes = [];
  for (let i = 2; i <= number;) {
    if (number % i === 0) {
      if (isPrime(i)) {
        primes.push(i)
      } else {
        primes = primes.concat(getAllPrimes(i))
      }
      number = number / i;
      i = 2;
    } else {
      i++;
    }
  }
  return primes;
};

function isPrime(num) {
  if (num < 2) return false;

  let counter = 2;
  while (counter < num) {
    if (num % counter === 0) return false;
    counter++;
  };
  
  return true;
};

console.log(getAllPrimes(15))