// Write an `Array.prototype.dups` method that will return an object containing
// the indices of all duplicate elements. The keys are the duplicate elements; 
// the values are arrays of their indices in ascending order
//
// Example: 
// [1, 3, 4, 3, 0, 3, 0].dups => { 3: [1, 3, 5], 0: [4, 6] }

Array.prototype.dups = function() {
  const tracker = {};
  const result = {};

  for (let i = 0; i < this.length; i++) {
    if (tracker[this[i]]) {
      let temp = tracker[this[i]]
      temp.push(i)
      tracker[this[i]] = temp;
    } else {
      tracker[this[i]] = [i]
    }
  }

  let keys = Object.keys(tracker)

  for (let i = 0; i < keys.length; i++) {
    let letter = keys[i]
    if (tracker[letter].length > 1) result[letter] = tracker[letter];
  }

  return result;
};

console.log([1, 3, 4, 3, 0, 3, 0].dups())