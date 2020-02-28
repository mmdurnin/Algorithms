// Write a function `transpose(arr)` that returns a 2d array transposed.
// e.g. transpose([[1,2],[3,4],[5,6]]) => [[1,3,5],[2,4,6]]

function transpose(matrix) {
  let result = [];
  for (let j = 0; j < matrix[0].length; j++) {
    let sub = [];
    for (let i = 0; i < matrix.length; i++) {
      sub.push(matrix[i][j])
    }
    result.push(sub)
  }
  return result
}

console.log(transpose([[1, 2], [3, 4], [5, 6]]))