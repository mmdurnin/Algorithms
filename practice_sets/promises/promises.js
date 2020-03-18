const fetch = require('node-fetch')
const todos = ["wash dishes", "but shampoo"]

function getTodos() {
  let output = '';

  todos.forEach((todo) => {
    output += `<li>${todo}</li>`
  });
  document.body.innerHTML = output;
}

function createTodo(todo) {
  return new Promise((resolve, reject) => {
    todos.push(todo);

    const error = false; // usually this would be logic to determine whether resolve or reject
    // const error = true;

    if (!error) {
      resolve();
    } else {
      reject('Error: Something went wrong');
    }

  });
}

// createTodo("tax returns")
//   .then(getTodos) // apparently you don't need to invoke!
//   .catch((error) => console.log(error))

// async/ await
// -- a way to handle responses! We need a function labeled asynchronous
// -- await waits for an asynchronous process to finish
// async function init() {
//   await createTodo("tax returns")

//   getTodos();
// };

// init();

// if we wanted to use async await with fetch:
async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')

  const data = await res.json(); // two awaits because fetch is weird (like saying .then twice)
  console.log(data)
}

// fetchTodos();

// using promise.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   resolve("resolved");
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((response) => response.json()) // for fetch we need two ".then"s

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values))


const diyPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("hello"), 2000)
  // resolve("hello")
})
const users = fetch(`https://jsonplaceholder.typicode.com/todos`).then(res => res.json())
const todoList = fetch(`https://jsonplaceholder.typicode.com/todos`).then(res => res.json())

Promise.all([diyPromise, users, todoList])
  .then((values) => {console.log(values)})


async function spaceConsoleLogs() {
  let i = 1;
  while (i < 5) {
    i = await increment(i)
    console.log(i)
  }
}

function increment(i) {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      i++
      resolve(i)
    }, 2000)
  })
}

// spaceConsoleLogs()

// First promise returns an array
const getUsers = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve([{ id: 'jon' }, { id: 'andrey' }, { id: 'tania' }]), 600)
  })
}

// Second promise relies on the resulting array of first promise
const getIdFromUser = users => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(users.id), 500)
  })
}

// Third promise relies on the result of the second promise
const capitalizeIds = id => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(id.toUpperCase()), 200)
  })
}

const runAsyncFunctions = async () => {
  const users = await getUsers()

  Promise.all(
    users.map(async user => {
      const userId = await getIdFromUser(user)
      console.log(userId)

      const capitalizedId = await capitalizeIds(userId)
      console.log(capitalizedId)
    })
  )

  console.log(users)
}

runAsyncFunctions()