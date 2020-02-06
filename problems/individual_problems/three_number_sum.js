// algoExpert

function threeNumberSum(array, targetSum) {
    const visited = new Set();
    array = mergeSort(array);

    for (let i = 0; i < array.length; i++) {
        let lIdx = i + 1;
        let rIdx = array.length - 1;
        while (lIdx < rIdx) {
            let base = array[i];
            let l = array[lIdx];
            let r = array[rIdx];

            let sum = base + l + r;
            if (sum === targetSum) {
                visited.add([base, l, r]);
                lIdx++;
                rIdx--;
            } else if (sum < targetSum) {
                lIdx++;
            } else {
                rIdx--;
            }
        }
    }
    return Array.from(visited);
}

function mergeSort(array) {
    if (array.length < 2) return array;

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    let leftSort = mergeSort(left);
    let rightSort = mergeSort(right);

    return sort(leftSort, rightSort);
}

function sort(left, right) {
    let merged = [];
    while (left.length > 0 && right.length > 0) {
        merged.push(left[0] < right[0] ? left.shift() : right.shift())
    }
    return merged.concat(left, right);
};

console.log(threeNumberSum([1, 2, 3, 5, 4], 10))
console.log(mergeSort([3, 2, 6, 3, -12, 5, 1, 4, 10, 9, 9]));