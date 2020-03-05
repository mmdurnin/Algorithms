/*
// promises: an alternative to callbacks, a way to handle asynchronous functions
// promises are a design pattern
// promise library are specific implementations of promise design patterns

  promises are ES6! 
  promises are ES7 apparently??
  
// 2 components
// 1) promise object - think: progress bar, physical representation of an intangible concept
// 2) deferred object - interface into the progress bar: javascript object
//    -- has a property on it called promise which is the promise object
//    -- these are two separate objects: you could pass the deferred and the promise into separate functions and operate on them independently
//        BUT you can always get to the promise from the deferred object because its just a property on it "deferred.promise"

    promise also has 2 properties on it itself: 1) status, 2) value
    - by default when you create a promsie the status is pending and the value is undefined

    DEFERRED: has the promise property AND has two functions that you can call: resolve & reject
      RESOLVE: if you think of promise as progress bar, resolve function is saying "this is no longer in progress. It has completed. You can go ahead now with the rest of your function"
        When we resolve a promise we resolve it with a value and that becomes the value of the promsie and any function awaiting for that value now uses that value to continue its execution
        If you call reject function on a promise after its been resolved nothing will happen
        Example: promise gets resolved with the value of 23. After promise is resolved with this value, promise updates its value to 23 and status to "resolved"
                 this will also trigger the "then" function and sever its connection with the "catch" function
        On the other hand, if our promise were rejected: resolve branch gets severed (if rejected, can no longer ever resolve)
        status of promise updates to rejected, value updates to error object that was returned
        downstream, we hit the .catch function and .then function gets severed.

    PROMISE: has 2 properties (status and value) AND has two functions that you can call: then & catch

ASYNC AWAIT



*/