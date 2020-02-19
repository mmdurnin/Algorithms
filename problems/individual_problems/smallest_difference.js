// sort both arrays
// create pointers that start at index 0 for both
// keep smallest diff key
// if L pointer is less than R pointer, move L pointer (or vise versa)
// update key if dif < key
// go all the way
// Do not edit the line below.

function smallestDifference(arr1, arr2) {
    arr1 = arr1.sort(function(a, b) {return a-b})
    arr2 = arr2.sort(function(a, b) {return a-b})

    let key = Math.abs(arr1[0] - arr2[0]);
    let l = arr1[0];
    let r = arr2[0];

    let lPointer = 0;
    let rPointer = 0;

    while (lPointer < arr1.length && rPointer < arr2.length) {
        lNum = arr1[lPointer];
        rNum = arr2[rPointer];

        let diff = Math.abs(lNum - rNum);
        if (diff === 0) return [lNum, rNum];
        if (diff < key) {
            key  = diff;
            l = lNum;
            r = rNum;
        };

        if (lNum < rNum) {
            lPointer += 1;
        } else {
            rPointer += 1;
        }
    }
    return [l, r];
}

const arrOne = [4, 1, 3, 7, 98, 41, 234, -83]
const arrTwo = [12, 52, 32, 27, 2, 11, 765]
console.log(smallestDifference(arrOne, arrTwo))