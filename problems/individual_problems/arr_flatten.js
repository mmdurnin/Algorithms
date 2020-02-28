// Write an `Array.prototype.myFlatten()` method which flattens a
// multi-dimensional array into a one-dimensional array.
// Example:
// [["a"], "b", ["c", "d", ["e"]]].myFlatten() => ["a", "b", "c", "d", "e"]

Array.prototype.myFlatten = function() {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      result = result.concat(this[i].myFlatten())
    } else {
      result.push(this[i])
    }
  }

  return result;
}

console.log([1, 2, 3, [1, 2, 3, [6, 7, 8]]].myFlatten())