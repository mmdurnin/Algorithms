// algoExpert

function moveElementToEnd(array, toMove) {
    let i = array.length - 1;
    while (i <= 0 && array[i] === toMove) {
        i--;
    };
    if (i === -1) return array;

    let j = 0;
    while (j < i) {
        console.log(array);
        console.log(array.slice(j, i + 1))
        if (array[i] !== toMove && array[j] !== toMove) {
            console.log("array[i] !== toMove && array[j] !== toMove")
            j++;
        }
        if (array[i] === toMove) {
            console.log("array[i] === toMove")
            i--;
        } else if (array[j] === toMove) {
            console.log("array[j] === toMove")
            swap(array, j, i);
            j++;
            i--;
        };
        console.log(i)
        console.log(j)
    }
    return array;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

console.log(moveElementToEnd([1, 2, 2, 3, 5, 2, 1], 2))