// Write a function, `deepDup(arr)`, that will perform a "deep" duplication of the
// array and any interior arrays. A deep duplication means that the array itself,
// as well as any nested arrays (no matter how deeply nested) are duped and are
// completely different objects in memory than those in the original array.

function deepDup(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) dup[i] = deepDup(arr[i]);
  };

  return dup;
};

function checkDup(arr) {
  const copy = deepDup(arr)

  if (copy === arr) return false;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      if (checkDup(arr[i]) === false) return false 
    }
  }

  return true;
};

console.log(checkDup([1, 2, 3, [4, 5, 6, [1, 1, 0]]]))