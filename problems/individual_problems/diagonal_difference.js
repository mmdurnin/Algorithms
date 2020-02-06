function diagonalDifference(arr) {
    let start = 0;
    let end = arr.length - 1;
    this.leftTotal = 0;
    this.rightTotal = 0;

    let that = this;

    for (let i = 0; i < arr.length; i++) {
        that.leftTotal += arr[i][start]
        that.rightTotal += arr[i][end]

        start += 1
        end -= 1
    }


    return Math.abs(leftTotal - rightTotal);
}

console.log(diagonalDifference([11, 2, 4], [4, 5, 6], [10, 8, -12]))