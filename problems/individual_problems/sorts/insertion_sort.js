function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        for (var j = i - 1; j >= 0 && current < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
        //arr[j] is the # to the left of (/lower than) the insertion index (j-- then the loop stops)
        //arr[j+1] is the array at the insertion index
        //"arr[j+1] = current" is the actual insertion. Every step along the way we were replacing the number to the right with the number at idx j
        //At the final step, the # to the right has been replaced with number at idx j, and target number needs to be updated with its replacement
    }
    return arr;
}

console.log(insertionSort([1, 6, 3, 2, 2, 5]))