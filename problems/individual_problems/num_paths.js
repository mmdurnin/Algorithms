function numPaths(x, y) {
  if (x === 1 || y === 1) return 1;

  return numPaths(x - 1, y) + numPaths(x, y - 1)
};

console.log(numPaths(3, 3))