// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments 
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.

Function.prototype.myCurry = function (numArgs) {
  let func = this;
  let eles = [];
  return function curryThis(arg) {
    if (eles.length < numArgs) {
      return curryThis;
    } else if (eles.length === numArgs) {
      return func(...eles)
    }
  }
}