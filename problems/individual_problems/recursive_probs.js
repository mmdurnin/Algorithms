// Write a function, fileFinder(directories, targetFile), that accepts an object representing directories and a string respresenting a filename.
// The function should return true, if the file is contained anywhere in the given directories.
// Note that directory names will begin with '/', but file names will not.

let desktop = {
    '/images': {
        'app_academy_logo.svg': null,
        '/parks': {
              'yosemite.jpeg': null,
              'acadia.jpeg': null,
              'yellowstone.png': null
        },
        '/pets': {
            'trixie_lou.jpeg': null,
            'rolo.jpeg': null,
            'opal.jpeg': null,
            'diana.jpeg': null,
        }
    },
    '/music': {
        'hey_programmers.mp3': null,
        '/genres': {
            '/rock': {
                'everlong.flac': null,
                'livin_on_a_prayer.mp3': null
            },
            '/hip_hop': {
                'express_yourself.wav': null,
                'ny_state_of_mind.mp3': null
            }
        }
    }
};

function fileFinder(directories, targetFile) {
  let keys = Object.keys(directories);

  if (keys.includes(targetFile)) return true;

  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    if (key[0] === "/") {
      if (fileFinder(directories[key], targetFile) === true) return true;
    }
  }

  return false;
}

console.log(fileFinder(desktop, "app_academy_logo.svg"));
console.log(fileFinder(desktop, 'everlong.flac'));            // => true
console.log(fileFinder(desktop, 'sequoia.jpeg'));             // => false


function pathFinder(directories, targetFile) {
  let keys = Object.keys(directories);

  if (keys.includes(targetFile)) return `/${targetFile}`;

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (key[0] === "/") {
      let next = pathFinder(directories[key], targetFile);
      console.log(next)
      if (!!next && next.includes(targetFile)) return key.concat(next)
    }
  }
  return null;
}

// console.log(pathFinder(desktop, "app_academy_logo.svg"));
// console.log(pathFinder(desktop, 'everlong.flac'));           
// console.log(pathFinder(desktop, 'sequoia.jpeg'));             

function productSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let ele = array[i];
    if (!Array.isArray(ele)) {
      console.log("sumbefore")
      console.log(sum)
      sum += (ele);
      console.log("sumafter")
      console.log(sum)
    } else {
      sum = deeperSums(sum, ele, 2)
    }
  }
  return sum;
}

function deeperSums(sum, array, k) {
  console.log("sum")
  console.log(sum)
  console.log("array")
  console.log(array)
  for (let i = 0; i < array.length; i++) {
    console.log("we're in the for loop")
    let ele = array[i];
    if (!Array.isArray(ele)) {
      console.log("it's not an array")
      sum += (k * ele);
    } else {
      console.log("it is an array")
      sum = deeperSums(sum, ele, k + 1)
    }
  }
  return sum;
}

// console.log(productSum([1, 2, 3, [4, 5, [8, 9, 10], 11], 12]))
// console.log(productSum([1, 2, 3, 4, 5]))
// console.log(productSum([[[[[5]]]]]))