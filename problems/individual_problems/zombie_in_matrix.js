// Given a 2D grid, each cell is either a zombie 1 or a human 0. Zombies can 
// turn adjacent(up / down / left / right) human beings into zombies every hour.
// Find out how many hours does it take to infect all humans ?

// input: matrix
// • 1s and 0s
// • 0s turn into 1s if they are next to 1s

// output: count
// • = how many cycles will it take to turn all 0s to 1s?

// ex: [[1, 1, 1, 0],
//      [1, 1, 1, 0],
//      [0, 1, 1, 1],
//      [1, 1, 1, 1]]
//      output: 1

// strategy:
// use a "still_humans" flag to keep track of cycles
// inside a single cycle - iterate through entire grid. For each 1:
//  * turn flag off
//  * helper: check for neighboring 0s. If there are neighboring 0s, raise flag to increment count @ end of cycle. (If flag is raised, don't raise again)
//  * helper: turn neighboring 0s into 1s
//  * if flag is raised, increment count and start cycle over
// check for neighboring 0's: input = matrix & position / output = T/F 
// turn neighboring 0's into 1s: input = matrix & position / output = new matrix

function zombieAttack(matrix) {
    let furthestHuman = 0; // 0 means there is no human, 1 means the furthestHuman is right next door etc
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                let temp = findClosestZombie(i, j)
                if (temp > furthestHuman) furthestHuman = temp;
            }
        }
    }

    function findClosestZombie(i, j) {
        let distances = {};
        let queue = [[i, j, 0]];
        let shortest = matrix.length;

        while (queue.length) {
            let current = queue.shift();
            v = current[0]
            h = current[1]
            let distanceTraveled = current[2];

            let up = v - 1;
            let down = v + 1;
            let left = h - 1;
            let right = h + 1;

            if (search(up, h)) {
                distances[[up, h]] = 1;
                if (matrix[up][h] === 1) {
                    if (distanceTraveled < shortest) {
                        shortest = distanceTraveled;
                    }
                } else {
                    distanceTraveled = distanceTraveled + 1;
                    queue.push([up, h, distanceTraveled])
                }
            }

            if (search(down, h)) {
                distances[[down, h]] = 1;
                if (matrix[down][h] === 1) {
                    if (distanceTraveled < shortest) {
                        shortest = distanceTraveled;
                    }
                } else {
                    distanceTraveled = distanceTraveled + 1;
                    queue.push([down, h, distanceTraveled])
                }
            }

            if (search(v, left)) {
                distances[[v, left]] = 1;
                if (matrix[v][left] === 1) {
                    if (distanceTraveled < shortest) {
                        shortest = distanceTraveled;
                    }
                } else {
                    distanceTraveled = distanceTraveled + 1;
                    queue.push([v, left, distanceTraveled])
                }
            }

            if (search(v, right)) {
                distances[[v, right]] = 1;
                if (matrix[v][right] === 1) {
                    if (distanceTraveled < shortest) {
                        shortest = distanceTraveled;
                    }
                } else {
                    distanceTraveled = distanceTraveled + 1;
                    queue.push([v, right, distanceTraveled])
                }
            }
        }

        function search(i, j) {
            if (distances[[i, j]]) return false;
            if (i < 0 || i >= matrix.length) return false;
            if (j < 0 || j >= matrix[i].length) return false;
            return true;
        }

        return shortest;
    }

    return furthestHuman;
}



// FAILING STRATEGY:
// keep a "longest distance to zombie" key
// iterate through the matrix a single time
// when matrix[i][j] === 0, helper ("traverse" (up, down, left, right))
//  traverse: input = matrix, position / output = count
//  traverse should return SHORTEST path to zombie
//  if traverse(matrix, [i, j]) > longest distance to zombie, replace longest distance to zombie
//  return longest distance to zombie
// traverse:
// count starts at 0
// outer loop controls 4 inner loops (up down left right)
// at each outer loop, increment count and:
// call search up, search down, search left, search right
// if up || down || left || right === 1, return count
// if NOT up || down || left || right, increment count and start over with new positions
// up: takes in coords, searches up IF coords exist and new coords exist

// function zombieAttack(matrix) {
//     let count = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] === 0) {
//                 let temp = traverse(i, j);
//                 if (temp > count) {
//                     console.log(i, j)
//                     count = temp
//                 }
//             }
//         }
//     }

//     function traverse(i, j) {
//         let distance = 0;
//         let stillSearching = true;

//         let upI = i;
//         let downI = i;
//         let leftJ = j;
//         let rightJ = j;

//         while (stillSearching) {
//             distance = distance + 1;

//             upI--;
//             downI++;
//             leftJ--;
//             rightJ++;

//             if (searchUp(upI, j) || searchDown(downI, j) || searchLeft(i, leftJ) || searchRight(i, rightJ)) {
//                 stillSearching = false;
//             }
//         }
//         return distance;
//     }

//     function searchUp(i, j) {
//         if (i < 0) return false;
//         if (matrix[i][j] === 0) return false;
//         return true;
//     }

//     function searchDown(i, j) {
//         if (i >= matrix.length) return false;
//         if (matrix[i][j] === 0) return false;
//         return true;
//     }

//     function searchLeft(i, j) {
//         if (j < 0) return false;
//         if (matrix[i][j] === 0) return false;
//         return true;
//     }

//     function searchRight(i, j) {
//         if (j > matrix[i].length) return false;
//         if (matrix[i][j] === 0) return false;
//         return true;
//     }

//     return count
// }


// ** This strategy fails because as the zombies spread they can access humans around the corner


const mtx = [[0, 1, 1, 0, 1], [0, 1, 0, 1, 0], [0, 0, 0, 0, 1], [0, 1, 0, 0, 0]]
console.log(zombieAttack(mtx))

// [[0, 1, 1, 0, 1], 
//  [0, 1, 0, 1, 0], 
//  [0, 0, 0, 0, 1], 
// [ 0, 1, 0, 0, 0]]