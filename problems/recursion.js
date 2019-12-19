// Write a method `factorial(n)` which takes a number and returns the factorial of n.
// A factorial is the product of all whole numbers between 1 and n, inclusive.
// For example, `factorial(5)` is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(n) {
    if (n <= 1) return 1;

    return n * factorial(n - 1)
}

//Complexity: O(n) --> A recursive call is made n times




// Write a method fib(n) that takes in a number and returns the nth number of
// the fibonacci sequence.
//
// In the fibonacci sequence, the 1st number is 1 and the 2nd number is 1. To generate the
// next number in the sequence, we take the sum of the previous two fibonacci numbers.
// For example the first 5 numbers of the fibonacci sequence are `1, 1, 2, 3, 5`

function fib(n) {
    //fib(1) = 1 --> [1]
    //fib(2) = 1 --> [1, 1]
    //fib(3) = 2 --> [1, 1, 2]
    //fib(4) = 3 --> [1, 1, 2, 3]

    if (n === 1) return 1;
    if (n === 2) return 1;

    const f1 = fib(n - 1)
    const f2 = fib(n - 2)

    return f1 + f2
};

// console.log(fib(5)) --> 5
// Complexity: O(2^n) --> More than one recursive call on each stack (2 recursive calls per stackframe)
// Think of it as a tree. The tree is length n, but at each node, you see that it divides into 2 more nodes







// Write a function, sumArray(array), that takes in an array of numbers.
// The function should return the total sum of the elements.
// 
// Solve this recursively!
//
// Examples:
//
// sumArray([])             // => 0
// sumArray([5])            // => 5
// sumArray([5, 2])         // => 7
// sumArray([4, 10, -1, 2]) // => 15
function sumArray(array) {
    console.log(array)
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];

    let key = array.shift();

    return key + sumArray(array);
}

// console.log(sumArray([5, 2]));






// Write a function, fileFinder(directories, targetFile), that accepts an object representing directories and a string respresenting a filename.
// The function should return true, if the file is contained anywhere in the given directories.
// Note that directory names will begin with '/', but file names will not.

let desktop = {
    '/images': {
        'app_academy_logo.svg': null,
        '/parks': {
              'yosemite.jpeg': null,
              'acadia.jpeg': null,
              'yellowstone.png': null
        },
        '/pets': {
            'trixie_lou.jpeg': null,
            'rolo.jpeg': null,
            'opal.jpeg': null,
            'diana.jpeg': null,
        }
    },
    '/music': {
        'hey_programmers.mp3': null,
        '/genres': {
            '/rock': {
                'everlong.flac': null,
                'livin_on_a_prayer.mp3': null
            },
            '/hip_hop': {
                'express_yourself.wav': null,
                'ny_state_of_mind.mp3': null
            }
        }
    }
};

function fileFinder(directories, targetFile) {
  let keys = Object.keys(directories);

  if (keys.includes(targetFile)) return true;

  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    if (key[0] === "/") {
      if (fileFinder(directories[key], targetFile) === true) return true;
    }
  }

  return false;
}

console.log(fileFinder(desktop, "app_academy_logo.svg"));
console.log(fileFinder(desktop, 'everlong.flac'));            // => true
console.log(fileFinder(desktop, 'sequoia.jpeg'));             // => false