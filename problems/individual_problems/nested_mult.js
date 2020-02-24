/*
write a function that returns the multiplicative sum of an array
e.g., [1,2,3[2,6,[1]],1] = 1+2+3+2*(2+6)+3*(1)+1
*/

function  multSum(arr, mult=1) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += multSum(arr[i], mult+1)
        } else {
            sum += (mult * arr[i])
        }
    }
    return sum
}

console.log(multSum([1, 2, [2, 1]])) // 9