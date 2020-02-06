// leetcode

var threeSum = function (nums) {
    let target = 0;
    let sorted = mergeSort(nums);

    let result = new Set();

    let ref = null;
    console.log(sorted);

    for (i = 0; i < sorted.length; i++) {
        if (!!ref && sorted[i] === ref) i++;

        ref = sorted[i];
        let startIdx = i + 1;
        let endIdx = sorted.length - 1;
        while (startIdx < endIdx) {
            let lNum = sorted[startIdx];
            let rNum = sorted[endIdx];
            let tempSum = ref + lNum + rNum;

            if (tempSum === target) {
                result.add([ref, lNum, rNum]);
                startIdx++;
                endIdx--;
            } else if (tempSum < target) {
                startIdx++;
            } else {
                endIdx--;
            }
        }

        if (sorted[i] > target) return result;
    }
    return Array.from(result);
};

var mergeSort = function (arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);
    return sort(leftSorted, rightSorted);
}

var sort = function (left, right) {
    let sorted = [];
    while (left.length && right.length) {
        (left[0] < right[0]) ? sorted.push(left.shift()) : sorted.push(right.shift())
    }
    return sorted.concat(left, right)
}


console.log(threeSum([-1, 0, 1, 2, -1, -4], 0))