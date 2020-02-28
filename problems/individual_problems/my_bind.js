// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind-time and call-time.
// Note that you are NOT allowed to use ES6 arrow syntax for this problem.

Function.prototype.myBind = function(context, ...bindArgs) { // sayHello.myBind(Ciara, "hello", "Gavin") (hello and gavin are optional additional binded args)
  let that = this;
  return function(...callArgs) { // call args given separately, we turn them into array in function construction
    return that.apply(context, bindArgs.concat(callArgs)) // apply bound function to additional args passed in at time of invoke
  }
};

// this.sayHello = this.sayHello.bind(this)(args)

// when you construct with spread, you're telling the function that args should be treated as an array
/*
let arrary [ 1, 2, 3]
function test(...arr) {
  return arr
}
test(array) => [ [ 1, 2, 3 ] ]
*/
// when you invoke with spread, you're telling the function to treat each ele as an arg (remove from array)
/*
let array = [1, 2, 3]
function test(arr) {
  return arr
}
test(...array) => 1 (it returns the first element because its the first one it processes)
*/