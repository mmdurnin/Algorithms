function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        tempIdx = i;
        j = i + 1;
        console.log(arr)
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[j])
            console.log(arr[i])
            if (arr[j] < arr[tempIdx]) {
                tempIdx = j;
            }
        }
        swap(arr, i, tempIdx);
    }
    return arr;
}