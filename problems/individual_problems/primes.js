// Write a function `primes(num)`, which returns an array of the first "num" primes.
// You may wish to use an `isPrime(num)` helper function.

function primes(num) {
  let primes = [];

  for (let i = 3; primes.length < num; i++) {
    if (i % 2 === 0 && i !== 2) continue;
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % 2 === 0) return false;
  }
  return true;
}

console.log(primes(10));
