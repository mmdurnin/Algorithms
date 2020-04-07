const INDICES = {
  0: [0, 0],
  1: [0, 1],
  2: [0, 2],
  3: [1, 0],
  4: [1, 1],
  5: [1, 2],
}

function slidingPuzzle(board) {
  const target = '123450';
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const visited = new Set();
  let [i, j] = INDICES[squish(board).indexOf('0')]
  const queue = [[copy(board), i, j, 0]];

  while (queue.length) {
    [b, i, j, count] = queue.shift();
    let bStr = squish(b);
    if (bStr === target) return count; 
    if (visited.has(bStr)) continue;
    visited.add(bStr);

    for (let [x, y] of directions) {
      let [ix, jy] = [i+x, j+y];

      if (isValid(ix, jy)) {
        let newBoard = copy(b); swap(newBoard, i, j, ix, jy);
        queue.push([newBoard, ix, jy, count+1]);
      }
    }
  }

  function isValid(i, j) {
    if (i < 0 || i >= board.length) return false;
    if (j < 0 || j >= board[0].length) return false;
    return true;
  }
  return -1;
}

const squish = (arr) => arr.join().split(',').join('');

function swap(arr, i, j, ix, jy) {
  let tempVar1 = arr[i][j], tempVar2 = arr[ix][jy];
  arr[ix][jy] = tempVar1, arr[i][j] = tempVar2;
  return arr;
}

function copy(board) {
  return JSON.parse(JSON.stringify(board))
}

console.log(slidingPuzzle([[1, 2, 3], [4, 0, 5]]))
console.log(slidingPuzzle([[1, 2, 3], [5, 4, 0]]))