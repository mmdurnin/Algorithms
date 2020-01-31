// Three Number Sum
function threeNumberSum(array, targetSum) {
    console.log("even here???")
    const visited = new Set();
    array = mergeSort(array);
    console.log("hello")

    for (let i = 0; i < array.length; i++) {
        let lIdx = i + 1;
        let rIdx = array.length - 1;
        while (lIdx < rIdx) {
            let base = array[i];
            let l = array[lIdx];
            let r = array[rIdx];

            console.log("base")
            console.log(base)
            console.log("l")
            console.log(l)
            console.log("r")
            console.log(r)
            console.log(visited)
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
    console.log(visited);
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

// console.log(threeNumberSum([1, 2, 3, 5, 4], 10))
// console.log(mergeSort([3, 2, 6, 3, -12, 5, 1, 4, 10, 9, 9]));

function moveElementToEnd(array, toMove) {
    let i = array.length - 1;
    while (i <= 0 && array[i] === toMove) {
        i--;
    };
    if (i === -1) return array;

    let j = 0;
    while (j < i) {
        console.log(array);
        console.log(array.slice(j, i+1))
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