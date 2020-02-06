// leetcode

var findClosestElements = function (arr, x, k) {
    if (x === -1) x = arr[arr.length - 1];

    let targetIdx = findX(arr, x);
    let right = arr.slice(targetIdx + 1).length;
    let left = arr.slice(0, targetIdx).length;

    let leftLength = Math.ceil(k / 2);
    let rightLength = Math.floor(k / 2);

    if (left <= leftLength) {
        let diff = leftLength - left;
        rightLength += diff;
    } else if (right <= rightLength) {
        let diff = rightLength - right;
        leftLength += diff;
    };

    let startIdx = targetIdx - leftLength;
    let endIdx = targetIdx + rightLength;

    let array = [];
    for (i = startIdx; i <= endIdx; i++) {
        array.push(arr[i]);
    }
    return array;
};

function findX(arr, x) {
    if (arr.length === 0) return;
    if (arr.length === 1 && arr[0] !== x) return;
    if (arr.length === 1 && arr[0] === x) return 1;

    let mid = Math.floor(arr.length / 2);
    if (arr[mid] === x) {
        return mid;
    }

    let left = arr.slice(0, mid);

    if (arr[mid] > x) {
        return findX(left, x);
    } else {
        let right = arr.slice(mid + 1);
        return mid + findX(right, x);
    }
}

console.log(findX([1, 2, 3, 4, 5, 6, 7], 5));
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));