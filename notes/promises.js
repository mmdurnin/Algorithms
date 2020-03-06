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



PROMISES CONT:
  Hey promise are you still pending? When not pending I can say "were you rejected? were you resolved?"
  And then give me the stuff back
  But I dont need to query the promise continually I can use something called "then" or "catch"
  then is a function that receives a function to be executed (kind of like a callback) when it has been fulfilled
  catch receives a function to be executed if and when it has been rejected

  fetch is a function where you give it a url and it fetches the stuff from that url and gives you a promise back

ASYNC AWAIT
*ES8*
await: just wait for the promise to resolve


DIY PROMISE
(more relevant if you're a developer and want to make your own promise library, otherwise you can just use someone else's promise)
If I'm going to make my own promise, I need to provide pathways for resolution or rejection of that promise
-- when I create the new promise I have to say "what happens when its resolved?" "what happens when it's rejected?"


QUESTIONS:
* what is the deferred object?
* is an ajax call a promise? or is it an asynchronous call that I wrap in a promise?
* what is the use case for saying new promise?
* how do I use promise.all?
* how does async await work?
* how does axios work?
* what are all of the jquery promise methods?
* how do I make sure I can use jquery on any type of file?
* what are all of the ways I can wrap an asynchronous function into a promise? (is it wrap?)
* what does it mean that "fetch" returns an actual promise? I get how you have to interact with it, but do other asynchronous functions not return a promise?


*/

// DIY PROMISE
// this is an asynchronous function
// this is the old way: have a function that is asychronous and we pass a callback to it (sayHello)
function oldSetup() {
  setTimeout(sayHello, 1000)
}

function sayHello() {
  console.log("Hello")
}

// this is the new way: 
function newSetup() {
  delay(1000)
    .then(() => console.log("hello"))
    .catch(err => console.log(err))
}

// longhand
// function delay(time) {
//   function dealWithPromise(resolve, reject) { // dealWithPromise is a function that I am defining to handle resolution/ rejection
//     // ..... (see below, we're going to restructure this)
//   }
//   return new Promise(dealWithPromise) // that function (deal with promise) is returned with this new promise
// }

// usually you'll see it like this (dealWithPromise written in anonymous straight into new Promise):

function delay(time) { // to review: delay is going to return a new promise and I'm providing pathways to handle resolution and rejection of said promise

  return new Promise((resolve, reject) => {
    
    // setTimeout((resolve, time)) -> in this example, our promise is going to resolve after specified time (we're saying "resolve this"), but in the real world we would set up conditions for resolve and reject
    //                                (notice that I don't invoke resolve. It get's invoked when setTimeOut is done. If I invoked, setTimeOut would be operating on the result of resolve. think: onClick = you have to do the () => {} thing.)

    if (typeof(time) !== 'number') {
      reject(new Error("The function delay requires a valid number"))
    } else {
      setTimeout((resolve, time))
      // if you want the resolution to return a value, invoke resolve with that value (like how you invoke reject with the error)
      // in this example, it would look like: setTimeOut(() => resolve(returnValue), time)
    }

  })
}

// this was a stupid example of async await
// async function delayES8(time) { // this delay function is also going to return a promise 
//   await delay(time); // here, we're pretending that delay is some function that returns a promise (like if we were using fetch)
//   return
// }