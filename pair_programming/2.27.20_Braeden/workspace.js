// You have to code a function getAllPrimeFactors wich take an integer as parameter
// and return an array containing its prime decomposition by ascending factors, if 
// a factors appears multiple time in the decomposition it should appear the  
// same number of times in the array.

//     exemple: getAllPrimeFactors(100) returns[2, 2, 5, 5] in this order.

// This decomposition may not be the most practical.

// You should also write getUniquePrimeFactorsWithCount, a function which will
// return an array containing two arrays: one with prime numbers appearing in the 
// decomposition and the other containing their respective power.

//     exemple: getUniquePrimeFactorsWithCount(100) returns[[2, 5], [2, 2]]

// You should also write getUniquePrimeFactorsWithProducts an array containing the 
// prime factors to their respective powers.

//     exemple: getUniquePrimeFactorsWithProducts(100) returns[4, 25]

// Errors, if:

//     n is not a number
//     n not an integer
//     n is negative or 0
// The three functions should respectively return [], [[], []] and[].

// Edge cases:

// if n = 0, the function should respectively return [], [[], []] and[].
// if n = 1, the function should respectively return [1], [[1], [1]], [1].
// if n = 2, the function should respectively return [2], [[2], [1]], [2].


function getAllPrimes(number) { //15
  let primes = [];

  let flag = true
  let i = 2;
  while (flag) {

    if (number % i === 0) { 

      if (isPrime(i)) primes.push(i) 
      if (i >= number) flag = false;
      number = number / i;
      i = 2;
      
    } else {
      i ++;
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

function getAllPrimeFactors(n) {
  if (!Number.isInteger(n)) return [];
  if (n === 1) return [1];
  let result = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      result.push(i);
      n /= i;
    }
  }
  return n <= 1 ? result : result.concat([n]);
}

// console.log(getAllPrimeFactors(100))

// [1, 2, 3, [1, 2, 3, [1, 2, 3]]] = 1 * (1 + 2 + 3) + 2 * (1 + 2 + 3) + 3 * (1 + 2 + 3)




function thing(array, mult=1) {
    count = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (typeof element === 'number') {
            count += element * mult;
        } else if (typeof element === 'array') {
            count += thing(element,mult+1);
        }
    }
    return count;
}

console.log(thing([1, 2, 3, [1, 2, 's', [1, 2, 3]],4]));