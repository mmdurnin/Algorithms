// You have to code a function getAllPrimeFactors wich take an integer as parameter
// and return an array containing its prime decomposition by ascending factors, if
// a factors appears multiple time in the decomposition it should appear the
// same number of times in the array.
//     exemple: getAllPrimeFactors(100) returns[2, 2, 5, 5] in this order.

function getAllPrimes(number) {
  let primes = [];
  for (let i = 2; i <= Math.sqrt(number); i++) {
    
    if (number % i === 0) {
      number = number / i;
      if (isPrime(i)) primes.push(i);
      if (isPrime(number)) {
        primes.push(number);
        break;
      };
      i = 1;
    }
  }
  return primes;
}

function getAllPrimeFactors(number) {
  let primes = [];
  for (let i = 2; i <= Math.sqrt(number); i++) {
    while (number % i === 0) {
      primes.push(i)
      number /= i
    }
  }
  return number <= 1 ? primes : primes.concat(number)
};

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  };
  
  return true;
};

console.log(getAllPrimeFactors(15))
console.log(getAllPrimes(15))