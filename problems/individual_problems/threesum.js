var threeSum = function (nums) {
    if (nums.length < 3) return [];
    if (nums.every(num => num === 0) && nums.length >= 0) return [[0, 0, 0]];

    let target = 0;
    let sorted = mergeSort(nums);

    let result = [];
    let set = new Set();

    let ref = null;

    for (i = 0; i < sorted.length - 2; i++) {
        if (!!ref && sorted[i] === ref) continue;

        ref = sorted[i];
        let startIdx = i + 1;
        let endIdx = sorted.length - 1;

        while (startIdx < endIdx) {

            let lNum = sorted[startIdx];
            let rNum = sorted[endIdx];
            let tempSum = ref + lNum + rNum;
            let tempKey = `${ref}${lNum}${rNum}`;

            if (tempSum === target && !set.has(tempKey)) {
                set.add(tempKey)
                result.push([ref, lNum, rNum]);
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
    return result;
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
};

console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]))
console.log(threeSum([-1, -2, -3, 4, 1, 3, 0, 3, -2, 1, -2, 2, -1, 1, -5, 4, -3]))
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([-2, -2, 0, -2, 2, -4, 2, 0, 4, 4, 4]))
