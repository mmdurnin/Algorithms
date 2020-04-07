function spaceConsoleLogs() {
  let i = 1;
  let j = 1;
  let time = 1000;
  while (i <= 5) {
    setTimeout(function () {
      consoleLog(j)
      j++
    }, time);
    i++;
    time += 1000;
  }
  function consoleLog(count) {
    return console.log(count)
  }
}

// spaceConsoleLogs();

function spaceLogs(num) {
  for (let i = 0; i < num; i++) {
    delay(1000, i).then(() => {console.log(i)})
  }
}

function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

spaceLogs(5)