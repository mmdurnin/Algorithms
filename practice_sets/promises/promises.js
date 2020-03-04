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

fetchTodos();

// using promise.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   resolve("resolved");
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((response) => response.json()) // for fetch we need two ".then"s

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values))