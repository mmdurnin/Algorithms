function diagonalDifference(arr) {
    let start = 0
    let end = arr.length - 1
    let leftTotal = 0
    let rightTotal = 0

    for (let i = 0; i < arr.length; i++) {
        leftTotal += arr[i][start]
        rightTotal += arr[i][end]

        start += 1
        end -= 1
    }

    console.log(start)
    console.log(end)
    return Math.abs(start - end)
}

console.log(diagonalDifference([11, 2, 4], [4, 5, 6], [10, 8, -12]))