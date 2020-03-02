/*
You are given a two-dimensional array(matrix) of potentially unequal height and width containing only 0s and 1s.
Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are 
either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river
determines its size. Write a function thatt returns an array of the sizes of all rivers represented in the input matrix.
Not that the sizes do not need to be in any particular order.
*/

function riverSizes(matrix) {
  let rivers = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) rivers.push(getSize(i, j))
    }
  }

  function getSize(i, j) {
    let count = 0;
    let queue = [[i, j]];
    while (queue.length) {
      let current = queue.shift(); let [i, j] = current;
      if (matrix[i][j] !== 1) continue;

      count ++;
      matrix[i][j] = 'X'
      
      let up = [i-1, j];
      if (isValid(up)) queue.push(up);

      let down = [i+1, j];
      if (isValid(down)) queue.push(down);

      let left = [i, j-1];
      if (isValid(left)) queue.push(left);

      let right = [i, j+1];
      if (isValid(right)) queue.push(right);
    }
    return count;
  }

  function isValid(arr) {
    let [i, j] = arr;
    if (i < 0 || i >= matrix.length) return false;
    if (j < 0 || j >= matrix[0].length) return false;
    return true;
  }

  return rivers;
}

let arr = [[1, 1, 0, 1],
           [1, 0, 1, 1],
           [0, 1, 0, 0],
           [0, 1, 0, 0]]

console.log(riverSizes(arr)) // [3, 3, 2]