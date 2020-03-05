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

spaceConsoleLogs();