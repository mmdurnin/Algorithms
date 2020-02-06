function miniMaxSum(arr) {
    let sum = getSum(arr);
    let min = sum;
    let max = 0;

    function getSum(arr) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum;
    }

    for (let i = 0; i < arr.length; i++) {
        let temp = sum - arr[i];
        if (temp < min) min = temp;
        if (temp > max) max = temp;
    }

    return [min, max]
}

console.log(miniMaxSum([1, 2, 3, 4, 5]))